import { QuestionOutput, QuestionType } from "@/schemas/question.schema";
import { Button, Tooltip } from "@material-tailwind/react";
import { BiCommentAdd } from "react-icons/bi";
import { ManifestQuestionMultipleChoice } from "./ManifestQuestionMultipleChoice";
import { ManifestQuestionText } from "./ManifestQuestionText";

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
    case "text":
      return <ManifestQuestionText question={question} />;
    case "file":
      return <div>Question File</div>;
    case "multipleChoice":
      return <ManifestQuestionMultipleChoice question={question} />;
    default:
      return <div>Question</div>;
  }
}

export function ManifestQuestion(props: ManifestQuestionProps) {
  return (
    <div className="flex justify-between p-2 gap-4 items-center">
      <div className="w-40 break-all">
        {props.question?.description}
        <p className="text-gray-500">{props.question?.help}</p>
      </div>
      <div className="flex-1">
        {ManifestQuestionFactory({
          type: props.question!.type,
          question: props.question!,
        })}
      </div>
      <div>
        <Tooltip content="Adicionar comentário">
          <Button size="sm" variant="outlined" className="rounded-full p-2">
            <BiCommentAdd className="text-lg" />
          </Button>
        </Tooltip>
      </div>
    </div>
  );
}
