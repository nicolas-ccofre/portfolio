import { useSeamlessVideoLoop } from "../../hooks/useSeamlessVideoLoop";
import { asset } from "../../lib/asset";

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
        <source src={asset("videos/hero.mp4")} type="video/mp4" />
      </video>
    </div>
  );
}
