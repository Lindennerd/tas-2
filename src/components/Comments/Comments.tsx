import { useFormatDate } from "@/hooks/useFormatDate";
import { Comment } from "@/schemas/comment.schema";
import { Button } from "@material-tailwind/react";
import { BiCheck, BiX } from "react-icons/bi";

interface CommentsProps {
  comments: Comment[];
}

export function Comments(props: CommentsProps) {
  const formatDate = useFormatDate();

  return (
    <div className="p-2 flex items-center justify-between">
      <div>
        {props.comments.map((comm) => (
          <div key={comm?.id}>
            <p className="text-sm text-gray-500">{`${
              comm?.userId
            } comentou em ${formatDate(comm?.createdAt)}`}</p>
            <p className="p-2 border-l-2">{comm?.value}</p>
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-2">
        <Button
          size="sm"
          variant="text"
          color="green"
          className="p-2 rounded-full flex items-center"
        >
          <BiCheck className="text-xl" /> Aprovar
        </Button>
        <Button
          size="sm"
          variant="text"
          color="red"
          className="p-2 rounded-full flex items-center"
        >
          <BiX className="text-xl" /> Rejeitar
        </Button>
      </div>
    </div>
  );
}
