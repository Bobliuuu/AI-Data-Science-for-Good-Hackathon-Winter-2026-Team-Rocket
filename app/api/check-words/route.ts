import { NextRequest, NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai";

export async function POST(req: NextRequest) {
  const apiKey = process.env.GEMINI_API_KEY ?? process.env.GOOGLE_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: "GEMINI_API_KEY not set" }, { status: 500 });
  }

  let body: { text?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const text = typeof body?.text === "string" ? body.text.trim() : "";
  if (!text) {
    return NextResponse.json({ ranges: [] });
  }

  try {
    const ai = new GoogleGenAI({ apiKey });
    const res = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: [
        {
          role: "user",
          parts: [
            {
              text: `You are an ESL grammar/spelling checker. Given a sentence from an English learner, output the character ranges (0-based start and end indices) of words or phrases that are wrong: spelling error, wrong word, or grammar mistake.

Sentence: "${text.replace(/"/g, '\\"')}"

Output valid JSON only, no other text:
{"ranges":[{"start":0,"end":4},{"start":10,"end":14}]}

Each range must be start < end and within the sentence length (${text.length}). If nothing is wrong, output {"ranges":[]}.`,
            },
          ],
        },
      ],
      config: { responseMimeType: "application/json" },
    });
    const raw = (res as { text?: string }).text ?? "";
    const parsed = JSON.parse(raw || "{}") as { ranges?: Array<{ start?: number; end?: number }> };
    const ranges = Array.isArray(parsed?.ranges)
      ? parsed.ranges
          .filter((r) => typeof r?.start === "number" && typeof r?.end === "number" && r.start < r.end && r.end <= text.length)
          .map((r) => ({ start: r.start!, end: r.end! }))
      : [];
    return NextResponse.json({ ranges });
  } catch (e) {
    console.error("[check-words] Error:", e);
    return NextResponse.json({ ranges: [] });
  }
}
