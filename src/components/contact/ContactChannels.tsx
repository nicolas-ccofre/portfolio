const channels = [
  {
    href: "mailto:n.carrillocofr@gmail.com",
    icon: "✉",
    label: "Email",
    value: "n.carrillocofr@gmail.com",
    external: false,
  },
  {
    href: "https://wa.me/56983308372",
    icon: "💬",
    label: "WhatsApp",
    value: "+56 9 8330 8372",
    external: true,
  },
];

export default function ContactChannels() {
  return (
    <div className="flex flex-col gap-4">
      {channels.map((channel) => (
        <a
          key={channel.href}
          href={channel.href}
          target={channel.external ? "_blank" : undefined}
          rel={channel.external ? "noreferrer" : undefined}
          className="flex items-center gap-4 rounded-field border border-[rgba(60,105,160,0.18)] bg-white/45 px-5 py-4 backdrop-blur-md transition-[250ms] hover:-translate-y-0.5 hover:bg-white/80"
        >
          <div className="text-[1.4rem]">{channel.icon}</div>
          <div>
            <strong className="block text-[0.9rem] text-text">{channel.label}</strong>
            <span className="text-[0.85rem] text-text-muted">{channel.value}</span>
          </div>
        </a>
      ))}
    </div>
  );
}
