import { useUnsavedChangesContext } from "@/context/manifest.changes.context";
import { QuestionOutput } from "@/schemas/question.schema";
import { Input } from "@material-tailwind/react";
import { useState } from "react";

interface ManifestQuestionTextProps {
  question: QuestionOutput;
}

export function ManifestQuestionText(props: ManifestQuestionTextProps) {
  const changesContext = useUnsavedChangesContext();
  const [value, setValue] = useState(
    props.question?.Answer && props.question.Answer.length
      ? props.question.Answer[0]?.value
      : ""
  );

  const answerId =
    props.question?.Answer && props.question.Answer.length
      ? props.question.Answer[0]?.id
      : "";

  function onBlur(e: any) {
    changesContext.mutateAnswer({
      id: answerId,
      questionId: props.question!.id,
      value: value ?? "",
      manifestId: changesContext.manifestId,
    });
  }

  return (
    <Input
      label="Sua Resposta"
      className="w-full"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      onBlur={onBlur}
    />
  );
}
