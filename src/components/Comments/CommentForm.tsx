import { useUnsavedChangesContext } from "@/context/manifest.changes.context";
import { QuestionOutput } from "@/schemas/question.schema";
import { trpc } from "@/utils/trpc";
import { Button, Textarea } from "@material-tailwind/react";
import { useState } from "react";

interface CommentFormProps {
  question: QuestionOutput;
  onSave: () => void;
}

export function CommentForm(props: CommentFormProps) {
  const createCommentMutation = trpc.useMutation(["comments.create"]);
  const changesContext = useUnsavedChangesContext();

  const [comment, setComment] = useState("");

  function onSubmit(e: any) {
    e.preventDefault();

    createCommentMutation.mutate({
      questionId: props.question!.id,
      comment: comment,
      manifestId: changesContext.manifestId,
    });

    props.onSave();
  }

  return (
    <div className="w-full">
      <form onSubmit={onSubmit}>
        <Textarea
          label="Escreva aqui o seu comentário"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <Button type="submit">Salvar</Button>
      </form>
    </div>
  );
}
