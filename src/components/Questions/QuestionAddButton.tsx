import { Button, Tooltip } from "@material-tailwind/react";
import { BiAddToQueue } from "react-icons/bi";

export function QuestionAddButton({ enabled }: { enabled: boolean }) {
  return (
    <Tooltip
      content="Adicionar nova questão"
      animate={{
        mount: { scale: 1, y: 0 },
        unmount: { scale: 0, y: 25 },
      }}
    >
      <Button color="green" className="rounded-full" disabled={!enabled}>
        <BiAddToQueue className="text-lg" />
      </Button>
    </Tooltip>
  );
}
