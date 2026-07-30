import type { TeamMember } from "../../data/team";
import Reveal from "../ui/Reveal";
import TeamAvatar from "./TeamAvatar";

interface TeamCardProps {
  member: TeamMember;
}

export default function TeamCard({ member }: TeamCardProps) {
  return (
    <Reveal
      as="article"
      className="rounded-card border border-border bg-white/68 p-10 backdrop-blur-md transition-[background,border-color,transform,box-shadow] duration-[250ms] hover:-translate-y-1 hover:border-primary/30 hover:bg-white/92 hover:shadow-brand"
    >
      <TeamAvatar gradientId={`grad-${member.id}`} colors={member.avatarGradient} />
      <h3 className="mb-1">{member.name}</h3>
      <span className="mb-4 block text-[0.85rem] font-semibold text-primary">{member.role}</span>
      <p className="mb-5 text-[0.95rem] text-text-muted">{member.bio}</p>
      <ul className="flex flex-wrap gap-2">
        {member.skills.map((skill) => (
          <li
            key={skill}
            className="rounded-full border border-primary/18 bg-primary/8 px-3 py-1 text-[0.78rem] font-medium text-primary"
          >
            {skill}
          </li>
        ))}
      </ul>
    </Reveal>
  );
}
