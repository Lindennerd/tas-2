import { useErrorContext } from "@/context/error.context";
import { Option } from "@/schemas/option.schema";
import { QuestionType } from "@/schemas/question.schema";
import { trpc } from "@/utils/trpc";
import {
  Button,
  Input,
  Tab,
  TabPanel,
  Tabs,
  TabsBody,
  TabsHeader,
  Textarea,
} from "@material-tailwind/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import { FileFormChoiceForm } from "../Options/FileChoiceForm";
import { MultipleChoiceForm } from "../Options/MultipleChoiceForm";
import { OptionsList } from "../Options/OptionsList";
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
}

export function QuestionForm({ sectionId, onSave }: QuestionFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<QuestionForm>();

  const { setError } = useErrorContext();

  const questionCreate = trpc.useMutation(["questions.create"], {
    onError: (error) => setError(error.message),
    onSuccess: () => {
      toast.success("Questão salva com sucesso!");
      onSave();
    },
  });

  async function onSubmit(data: QuestionForm) {
    await questionCreate.mutateAsync({
      ...data,
      weight: Number(data.weight),
      sectionId,
    });
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
          className="form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
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
