import { QuestionOutput } from "@/schemas/question.schema";
import { Radio } from "@material-tailwind/react";

interface Props {
  question: QuestionOutput;
}

export function ManifestQuestionMultipleChoice(props: Props) {
  return (
    <div>
      {props.question?.Option.map((option) => {
        return (
          <div className="flex items-center mb-4" key={option.id}>
            <input
              type="radio"
              name={props.question?.id}
              className="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300"
            />
            <label
              htmlFor={props.question?.id}
              className="text-sm font-medium text-gray-900 ml-2 block"
            >
              {option.description}
            </label>
          </div>
        );
      })}
    </div>
  );
}
