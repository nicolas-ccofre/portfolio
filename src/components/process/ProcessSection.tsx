import { Fragment } from "react";
import SectionHeader from "../ui/SectionHeader";
import { processSteps } from "../../data/process";
import ProcessStep from "./ProcessStep";

export default function ProcessSection() {
  return (
    <section id="proceso" className="py-16 sm:py-25">
      <div className="mx-auto max-w-[1160px] px-6">
        <SectionHeader
          title="Cómo trabajamos"
          description="Un proceso simple, pensado para que sepas qué esperar en cada etapa."
        />
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:gap-0">
          {processSteps.map((step, index) => (
            <Fragment key={step.id}>
              <ProcessStep step={step} />
              {index < processSteps.length - 1 && (
                <div className="hidden lg:block lg:w-16 lg:pt-[42px]">
                  <div className="h-px w-full bg-border" />
                </div>
              )}
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
