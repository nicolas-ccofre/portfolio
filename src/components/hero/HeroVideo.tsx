import { useSeamlessVideoLoop } from "../../hooks/useSeamlessVideoLoop";

export default function HeroVideo() {
  const videoRef = useSeamlessVideoLoop();

  return (
    <div className="absolute inset-0 overflow-hidden">
      <video
        ref={videoRef}
        autoPlay
        muted
        playsInline
        preload="auto"
        className="h-full w-full object-cover object-center"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>
    </div>
  );
}
