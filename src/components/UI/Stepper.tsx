import { useEffect } from "react";

export type Step = {
  label: string;
  component: JSX.Element;
};

interface StepperProps {
  steps: Step[];
}

export function Stepper({ steps }: StepperProps) {
  useEffect(() => {
    const use = async () => {
      // ignore error importing tw-elements client-side library
      // @ts-ignore
      (await import("tw-elements")).default;
    };
    use();
  }, []);

  return (
    <ul className="stepper" data-mdb-stepper="stepper">
      {steps.map((step, index) => (
        <li
          // acivate the first element on load
          className={`stepper-step ${index === 0 ? "stepper-active" : ""}`}
          key={index}
        >
          <div className="stepper-head">
            <span className="stepper-head-icon"> {index + 1} </span>
            <span className="stepper-head-text"> {step.label} </span>
          </div>
          <div className="stepper-content">{step.component}</div>
        </li>
      ))}
    </ul>
  );
}
