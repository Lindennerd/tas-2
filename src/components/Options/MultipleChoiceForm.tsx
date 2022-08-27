import { useMultipleChoiceService } from "@/hooks/useMultipleChoiceService";
import { QuestionOutput } from "@/schemas/question.schema";
import { Button, Input } from "@material-tailwind/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { BiAddToQueue } from "react-icons/bi";
import { VscLoading } from "react-icons/vsc";

interface MultipleChoiceFormProps {
  question?: QuestionOutput;
  onAddOption?: () => void;
}

type MultipleChoiceFormState = {
  description: string;
};

export function MultipleChoiceForm({
  question,
  onAddOption,
}: MultipleChoiceFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<MultipleChoiceFormState>({
    defaultValues: question ?? {},
  });

  const { create } = useMultipleChoiceService();

  const [isLoading, setIsLoading] = useState(false);

  async function onSubmit(data: MultipleChoiceFormState) {
    if (!question) return;
    setIsLoading(true);
    await create({
      ...data,
      default: false,
      questionId: question.id,
    });
    onAddOption && onAddOption();
    setIsLoading(false);
  }

  return (
    <div className="w-full">
      <form className="flex space-x-2" onSubmit={handleSubmit(onSubmit)}>
        <Input label="Descrição" {...register("description")} />
        <Button
          variant="outlined"
          size="sm"
          color="green"
          type="submit"
          disabled={isLoading}
        >
          {isLoading ? (
            <VscLoading className="text-lg" />
          ) : (
            <BiAddToQueue className="text-lg" />
          )}
        </Button>
      </form>
    </div>
  );
}
