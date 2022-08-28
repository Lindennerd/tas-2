import { QuestionOutput } from "@/schemas/question.schema";
import { Input } from "@material-tailwind/react";

interface ManifestQuestionTextProps {
  question: QuestionOutput;
}

export function ManifestQuestionText(props: ManifestQuestionTextProps) {
  return <Input label="Sua Resposta" className="w-full" />;
}
