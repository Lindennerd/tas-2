import { QuestionOutput } from "@/schemas/question.schema";
import { Dialog, DialogBody, DialogHeader } from "@material-tailwind/react";
import { QuestionForm } from "./QuestionForm";

interface QuestionFormModalProps {
  open: boolean;
  sectionId: string;
  question?: QuestionOutput;
  handleOpen: () => void;
  onQuestionMutated?: () => void;
}

export function QuestionFormModal(props: QuestionFormModalProps) {
  return (
    <Dialog open={props.open} handler={props.handleOpen} size={"lg"}>
      <DialogHeader>
        <span className="text-center">Adicionar nova questão</span>
      </DialogHeader>
      <DialogBody divider className="overflow-auto">
        <QuestionForm
          sectionId={props.sectionId}
          question={props.question}
          onSave={() => {
            props.handleOpen();
            props.onQuestionMutated && props.onQuestionMutated();
          }}
        />
      </DialogBody>
    </Dialog>
  );
}
