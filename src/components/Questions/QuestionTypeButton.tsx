import { QuestionOutput, QuestionType } from "@/schemas/question.schema";
import { Dialog, DialogBody, DialogHeader } from "@material-tailwind/react";
import Button from "@material-tailwind/react/components/Button";
import { useState } from "react";
import { FileFormChoiceForm } from "../Options/FileChoiceForm";
import { MultipleChoiceForm } from "../Options/MultipleChoiceForm";
import { OptionsList } from "../Options/OptionsList";

interface QuestionTypeButtonProps {
  question: QuestionOutput;
  onMutateQuestion?: () => void;
}

export function QuestionTypeButton({
  question,
  onMutateQuestion,
}: QuestionTypeButtonProps) {
  const [toggleMultiplechoiceDialog, setToggleMultipleChoiceDialog] =
    useState(false);

  const [toggleFileDialog, setToggleFileDialog] = useState(false);

  const questionType =
    Object.values(QuestionType)[
      Object.keys(QuestionType).indexOf(question!.type)
    ];

  return (
    <>
      {question!.type === "multipleChoice" && (
        <Button
          size="sm"
          variant="outlined"
          onClick={(e) => {
            setToggleMultipleChoiceDialog(true);
          }}
        >
          Múltipla Escolha ({question?.Option.length})
        </Button>
      )}

      {question!.type === "file" && (
        <Button
          size="sm"
          variant="outlined"
          onClick={(e) => {
            setToggleFileDialog(true);
          }}
        >
          Arquivo
        </Button>
      )}

      {question!.type === "text" && <span>{questionType}</span>}

      <Dialog
        handler={setToggleMultipleChoiceDialog}
        open={toggleMultiplechoiceDialog}
        size="lg"
      >
        <DialogHeader>Opções</DialogHeader>
        <DialogBody>
          <div className="w-full space-y-2">
            <MultipleChoiceForm
              question={question}
              onAddOption={() => {
                onMutateQuestion && onMutateQuestion();
              }}
            />
            <OptionsList
              options={question?.Option}
              onRemoveOption={() => {
                onMutateQuestion && onMutateQuestion();
              }}
            />
          </div>
        </DialogBody>
      </Dialog>

      <Dialog handler={setToggleFileDialog} open={toggleFileDialog} size="lg">
        <DialogHeader>Tipos de Arquivo</DialogHeader>
        <DialogBody>
          <div className="w-full space-y-2">
            <FileFormChoiceForm
              questionId={question!.id}
              extension={question!.Extensions[0]}
              onSaveExtensions={() => {
                setToggleFileDialog(!toggleFileDialog);
                onMutateQuestion && onMutateQuestion();
              }}
            />
          </div>
        </DialogBody>
      </Dialog>
    </>
  );
}
