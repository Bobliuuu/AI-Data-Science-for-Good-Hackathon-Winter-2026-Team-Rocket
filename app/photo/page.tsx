"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState, type ChangeEvent } from "react";
import { AppShell, Icon, MiniNav } from "../components/flow-ui";

export default function PhotoPage() {
  const [cameraOpen, setCameraOpen] = useState(false);
  const [cameraError, setCameraError] = useState<string | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const closeCamera = useCallback(() => {
    streamRef.current?.getTracks().forEach((track) => track.stop());
    streamRef.current = null;
    setCameraOpen(false);
  }, []);

  const startCamera = useCallback(async () => {
    setCameraError(null);
    closeCamera();
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: { ideal: "environment" } },
      });
      streamRef.current = stream;
      setCameraOpen(true);
    } catch {
      try {
        const fallback = await navigator.mediaDevices.getUserMedia({ video: true });
        streamRef.current = fallback;
        setCameraOpen(true);
      } catch (e2) {
        setCameraError(e2 instanceof Error ? e2.message : "Camera unavailable.");
      }
    }
  }, [closeCamera]);

  useEffect(() => {
    const videoElement = videoRef.current;
    if (!cameraOpen || !streamRef.current || !videoElement) return;
    videoElement.srcObject = streamRef.current;
    return () => {
      videoElement.srcObject = null;
    };
  }, [cameraOpen]);

  useEffect(() => {
    if (imagePreview || cameraOpen || cameraError) return;
    const timer = window.setTimeout(() => {
      void startCamera();
    }, 0);
    return () => window.clearTimeout(timer);
  }, [imagePreview, cameraOpen, cameraError, startCamera]);

  useEffect(() => closeCamera, [closeCamera]);

  const setPreviewFromFile = useCallback((file: File) => {
    setImageFile(file);
    const reader = new FileReader();
    reader.onload = () => {
      setImagePreview(typeof reader.result === "string" ? reader.result : null);
    };
    reader.readAsDataURL(file);
  }, []);

  const captureFromCamera = useCallback(() => {
    const video = videoRef.current;
    if (!video || video.readyState < 2) return;

    const canvas = document.createElement("canvas");
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    canvas.toBlob(
      (blob) => {
        if (!blob) return;
        const file = new File([blob], "capture.jpg", { type: "image/jpeg" });
        setPreviewFromFile(file);
        closeCamera();
      },
      "image/jpeg",
      0.92
    );
  }, [closeCamera, setPreviewFromFile]);

  const onFileChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0];
      if (file) {
        setPreviewFromFile(file);
        closeCamera();
      }
      event.target.value = "";
    },
    [closeCamera, setPreviewFromFile]
  );

  return (
    <AppShell
      title="Take photo"
      subtitle="Real place lesson"
      headerIcon="photo"
      backHref="/"
    >
      <section className="flex min-h-0 flex-1 flex-col justify-center gap-3 overflow-hidden">
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={onFileChange}
          aria-label="Choose image from your device"
        />

        {!imagePreview ? (
          <>
            <div className="relative aspect-video w-full overflow-hidden rounded-[1.5rem] border border-[color:var(--line)] bg-black">
              {cameraOpen ? (
                <>
                  <video
                    ref={videoRef}
                    autoPlay
                    playsInline
                    muted
                    className="h-full w-full object-cover"
                  />
                  <button
                    type="button"
                    aria-label="Capture photo"
                    className="absolute bottom-3 left-1/2 inline-flex h-10 min-w-[4.75rem] -translate-x-1/2 items-center justify-center rounded-full border border-white/45 bg-black/68 text-white shadow-[0_10px_24px_rgba(0,0,0,0.38)] backdrop-blur-sm transition hover:bg-black/78 active:scale-[0.98]"
                    onClick={captureFromCamera}
                  >
                    <Icon name="photo" className="h-5 w-5" />
                  </button>
                </>
              ) : (
                <div className="flex h-full w-full items-center justify-center px-4 text-center text-sm font-semibold text-white/80">
                  {cameraError ? "Camera unavailable." : "Opening camera..."}
                </div>
              )}
            </div>

            {cameraError && (
              <button
                type="button"
                onClick={startCamera}
                aria-label="Retry camera"
                className="mx-auto inline-flex min-h-12 w-full max-w-[12rem] items-center justify-center gap-2 rounded-full border border-[color:var(--line)] bg-[color:var(--card)] px-4 text-sm font-extrabold text-[color:var(--text)] shadow-[0_8px_20px_rgba(53,41,25,0.1)] transition hover:brightness-[1.02] active:scale-[0.98]"
              >
                <Icon name="photo" className="h-5 w-5" />
                Retry camera
              </button>
            )}

            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              aria-label="Choose image"
              className="mx-auto inline-flex min-h-11 w-full max-w-[11rem] items-center justify-center gap-2 rounded-full border border-[color:var(--line)] bg-[color:var(--card)] px-4 text-sm font-bold text-[color:var(--muted)] shadow-[0_6px_14px_rgba(53,41,25,0.08)] transition hover:brightness-[1.02] active:scale-[0.98]"
            >
              <Icon name="image" className="h-[1.125rem] w-[1.125rem]" />
              Choose image
            </button>
          </>
        ) : (
          <>
            <div className="relative aspect-video w-full overflow-hidden rounded-[1.5rem] border border-[color:var(--line)] bg-[color:var(--card)]">
              <Image
                src={imagePreview}
                alt={imageFile?.name ? `Selected image: ${imageFile.name}` : "Selected image preview"}
                fill
                unoptimized
                sizes="(max-width: 480px) 92vw, 26rem"
                className="object-cover"
              />
            </div>
            <div className="flex gap-2">
              <Link
                href="/conversation"
                aria-label="Generate conversation"
                className="inline-flex min-h-[3.25rem] flex-1 items-center justify-center rounded-full bg-[linear-gradient(135deg,var(--teal),var(--teal-deep))] px-4 text-sm font-extrabold text-white shadow-[0_12px_24px_rgba(17,79,88,0.2)] transition hover:brightness-[1.02] active:scale-[0.98]"
              >
                Generate conversation
              </Link>
              <button
                type="button"
                onClick={() => {
                  setImagePreview(null);
                  setImageFile(null);
                  setCameraError(null);
                }}
                aria-label="Change image"
                className="inline-flex min-h-[3.25rem] items-center justify-center rounded-full border border-[color:var(--line)] bg-[color:var(--card)] px-4 text-sm font-bold text-[color:var(--text)] transition hover:brightness-[1.02] active:scale-[0.98]"
              >
                Change image
              </button>
            </div>
          </>
        )}
      </section>

      <MiniNav active="photo" />
    </AppShell>
  );
}
