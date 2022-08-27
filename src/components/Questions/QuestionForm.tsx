import { useErrorContext } from "@/context/error.context";
import { QuestionOutput, QuestionType } from "@/schemas/question.schema";
import { trpc } from "@/utils/trpc";
import { Button, Input, Textarea } from "@material-tailwind/react";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import { FormError } from "../UI/FormError";

export type QuestionForm = {
  weight: number;
  description: string;
  help: string;
  type: string;
};

interface QuestionFormProps {
  sectionId: string;
  onSave: () => void;
  question?: QuestionOutput;
}

export function QuestionForm({
  sectionId,
  onSave,
  question,
}: QuestionFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<QuestionForm>({
    defaultValues: question
      ? {
          help: question.help || undefined,
          description: question.description,
          type: question.type,
          weight: question.weight,
        }
      : {},
  });

  const { setError } = useErrorContext();

  const questionCreate = trpc.useMutation(["questions.create"], {
    onError: (error) => setError(error.message),
    onSuccess: () => {
      toast.success("Questão salva com sucesso!");
      onSave();
    },
  });

  const questionUpdate = trpc.useMutation(["questions.update"], {
    onError: (error) => setError(error.message),
    onSuccess: () => {
      toast.success("Questão editada com sucesso!");
      onSave();
    },
  });

  async function onSubmit(data: QuestionForm) {
    if (question) {
      await questionUpdate.mutateAsync({
        ...data,
        weight: Number(data.weight),
        sectionId,
        id: question.id,
      });
    } else {
      await questionCreate.mutateAsync({
        ...data,
        weight: Number(data.weight),
        sectionId,
      });
    }
  }

  return (
    <div className="w-full space-y-2">
      <ToastContainer />
      <form className="space-y-2" onSubmit={handleSubmit(onSubmit)}>
        <Input
          {...register("weight", { required: true })}
          label="Peso"
          type="number"
          max={10}
          min={1}
          className="min-w-20"
        />
        {errors.weight && errors.weight.type === "required" && (
          <FormError>Peso é obrigatório</FormError>
        )}
        <Textarea
          {...register("description", { required: true })}
          label="Descrição"
        />
        {errors.description && errors.description.type === "required" && (
          <FormError>A descrição da questão é obrigatória</FormError>
        )}
        <Textarea {...register("help")} label="Texto de Apoio" />
        <select
          {...register("type", {
            required: true,
          })}
          className="select"
          aria-label="Tipo de Questão"
        >
          {Object.values(QuestionType).map((type) => (
            <option
              key={type}
              value={
                Object.keys(QuestionType)[
                  Object.values(QuestionType).indexOf(type)
                ]
              }
            >
              {type}
            </option>
          ))}
        </select>
        {errors.type && errors.type.type === "required" && (
          <FormError>O Tipo da questão é obrigatório</FormError>
        )}
        <Button type="submit">Salvar</Button>
      </form>
    </div>
  );
}
