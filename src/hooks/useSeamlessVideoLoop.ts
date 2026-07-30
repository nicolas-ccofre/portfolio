import { useEffect, useRef } from "react";

/** Restarts the video ~0.18s before it ends to avoid the flash/freeze of the native `loop` attribute. */
export function useSeamlessVideoLoop() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleTimeUpdate = () => {
      if (video.duration && video.currentTime >= video.duration - 0.18) {
        video.currentTime = 0;
        video.play();
      }
    };

    video.addEventListener("timeupdate", handleTimeUpdate);
    return () => video.removeEventListener("timeupdate", handleTimeUpdate);
  }, []);

  return videoRef;
}
