import { useUnsavedChangesContext } from "@/context/manifest.changes.context";
import { QuestionOutput } from "@/schemas/question.schema";
import { Input } from "@material-tailwind/react";

interface ManifestQuestionTextProps {
  question: QuestionOutput;
}

export function ManifestQuestionText(props: ManifestQuestionTextProps) {
  const changesContext = useUnsavedChangesContext();

  return (
    <Input
      label="Sua Resposta"
      className="w-full"
      onBlur={(e) => {
        changesContext.mutateAnswer({
          questionId: props.question!.id,
          value: e.target.value,
        });
      }}
    />
  );
}
