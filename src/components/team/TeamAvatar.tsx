interface TeamAvatarProps {
  gradientId: string;
  colors: [string, string];
}

export default function TeamAvatar({ gradientId, colors }: TeamAvatarProps) {
  return (
    <div className="mb-5 h-20 w-20 overflow-hidden rounded-full">
      <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="40" cy="40" r="40" fill={`url(#${gradientId})`} />
        <circle cx="40" cy="32" r="13" fill="white" fillOpacity="0.9" />
        <ellipse cx="40" cy="68" rx="22" ry="15" fill="white" fillOpacity="0.9" />
        <defs>
          <linearGradient id={gradientId} x1="0" y1="0" x2="80" y2="80">
            <stop offset="0%" stopColor={colors[0]} />
            <stop offset="100%" stopColor={colors[1]} />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
