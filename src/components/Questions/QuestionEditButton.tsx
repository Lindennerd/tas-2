import { QuestionOutput } from "@/schemas/question.schema";
import { Button } from "@material-tailwind/react";
import { useState } from "react";
import { BiEdit } from "react-icons/bi";
import { QuestionFormModal } from "./QuestionFormModal";

interface QuestionEditButtonProps {
  question: QuestionOutput;
  onQuestionMutate?: () => void;
}

export function QuestionEditButton(props: QuestionEditButtonProps) {
  const [toggleEditQuestion, setToggleEditQuestion] = useState(false);

  return (
    <>
      <Button
        size="sm"
        variant="outlined"
        className="rounded-full p-1"
        onClick={() => setToggleEditQuestion(true)}
      >
        <BiEdit className="text-lg" />
      </Button>
      <QuestionFormModal
        handleOpen={() => setToggleEditQuestion(!toggleEditQuestion)}
        open={toggleEditQuestion}
        sectionId={props.question!.sectionId ?? ""}
        question={props.question}
        onQuestionMutated={() => {
          props.onQuestionMutate && props.onQuestionMutate();
        }}
      />
    </>
  );
}
