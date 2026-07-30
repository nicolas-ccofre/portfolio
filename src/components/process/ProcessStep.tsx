import type { ProcessStep as ProcessStepType } from "../../types/process";
import Reveal from "../ui/Reveal";

interface ProcessStepProps {
  step: ProcessStepType;
}

export default function ProcessStep({ step }: ProcessStepProps) {
  const Icon = step.icon;

  return (
    <Reveal className="lg:flex-1">
      <div className="mb-4 flex items-center gap-4">
        <span className="font-display text-3xl font-bold text-primary/25">{step.number}</span>
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/8 text-primary">
          <Icon size={20} weight="regular" />
        </div>
      </div>
      <h3>{step.title}</h3>
      <p className="mt-2 max-w-[320px] text-text-muted">{step.description}</p>
    </Reveal>
  );
}
