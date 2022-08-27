import { QuestionOutput, QuestionType } from "@/schemas/question.schema";
import { Button } from "@material-tailwind/react";

interface ManifestQuestionProps {
  question: QuestionOutput;
}

function ManifestQuestionFactory({
  type,
  question,
}: {
  type: string;
  question: QuestionOutput;
}) {
  console.log(type);

  switch (type) {
    case QuestionType.text:
      return <div>Question text</div>;
    case QuestionType.file:
      return <div>Question File</div>;
    case QuestionType.multipleChoice:
      return <div>Question Multiple Choice</div>;
    default:
      return <div>Question</div>;
  }
}

export function ManifestQuestion(props: ManifestQuestionProps) {
  return (
    <div className="flex justify-between p-2">
      <div>
        {props.question?.description}
        <span className="text-gray-5000">{props.question?.help}</span>
      </div>
      <div>
        {ManifestQuestionFactory({
          type: props.question!.type,
          question: props.question!,
        })}
      </div>
      <div>
        <Button>Add Comentário</Button>
      </div>
    </div>
  );
}
