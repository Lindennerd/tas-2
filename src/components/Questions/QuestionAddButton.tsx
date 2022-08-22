import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  Tooltip,
} from "@material-tailwind/react";
import { useState } from "react";
import { BiAddToQueue } from "react-icons/bi";
import { QuestionForm } from "./QuestionForm";

interface QuestionAddButtonProps {
  sectionId: string;
  onQuestionAdded: () => void;
}

export function QuestionAddButton({
  sectionId,
  onQuestionAdded,
}: QuestionAddButtonProps) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);

  return (
    <>
      <Tooltip
        content="Adicionar nova questão"
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0, y: 25 },
        }}
      >
        <Button
          color="green"
          className="rounded-full"
          variant="gradient"
          disabled={sectionId === undefined || sectionId === ""}
          onClick={handleOpen}
        >
          <BiAddToQueue className="text-lg" />
        </Button>
      </Tooltip>

      <Dialog open={open} handler={handleOpen} size={"lg"}>
        <DialogHeader>
          <span className="text-center">Adicionar nova questão</span>
        </DialogHeader>
        <DialogBody divider className="overflow-auto">
          <QuestionForm
            sectionId={sectionId}
            onSave={() => {
              handleOpen();
              onQuestionAdded();
            }}
          />
        </DialogBody>
      </Dialog>
    </>
  );
}
