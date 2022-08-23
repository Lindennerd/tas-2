import { useErrorContext } from "@/context/error.context";
import { Question } from "@/schemas/question.schema";
import { trpc } from "@/utils/trpc";
import { Button, Input } from "@material-tailwind/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { BiAddToQueue } from "react-icons/bi";
import { VscLoading } from "react-icons/vsc";

interface MultipleChoiceFormProps {
  question?: Question;
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

  const { setError } = useErrorContext();

  const [isLoading, setIsLoading] = useState(false);

  const createOption = trpc.useMutation(["options.create"], {
    onError: (error) => setError(error.message),
    onSuccess: () => setIsLoading(false),
  });

  async function onSubmit(data: MultipleChoiceFormState) {
    if (!question) return;
    setIsLoading(true);
    await createOption.mutateAsync({
      ...data,
      default: false,
      questionId: question.id,
    });
    onAddOption && onAddOption();
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
