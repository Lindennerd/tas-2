import { useErrorContext } from "@/context/error.context";
import { Option } from "@/schemas/option.schema";
import { trpc } from "@/utils/trpc";
import { Button, Input } from "@material-tailwind/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { BiAddToQueue } from "react-icons/bi";
import { VscLoading } from "react-icons/vsc";

interface MultipleChoiceFormProps {
  questionId?: string;
  onAddOption?: () => void;
}

type MultipleChoiceFormState = {
  description: string;
};

export function MultipleChoiceForm({
  questionId,
  onAddOption,
}: MultipleChoiceFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<MultipleChoiceFormState>();

  const { setError } = useErrorContext();

  const [isLoading, setIsLoading] = useState(false);

  const createOption = trpc.useMutation(["options.create"], {
    onError: (error) => setError(error.message),
    onSuccess: () => setIsLoading(false),
  });

  async function onSubmit(data: MultipleChoiceFormState) {
    if (!questionId) return;
    setIsLoading(true);
    await createOption.mutateAsync({
      ...data,
      default: false,
      questionId: questionId,
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
