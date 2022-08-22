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

export function QuestionAddButton({ enabled }: { enabled: boolean }) {
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
          disabled={!enabled}
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
          <QuestionForm />
        </DialogBody>
        <DialogFooter>
          <Button variant="outlined" color="green" onClick={handleOpen}>
            Salvar
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}
