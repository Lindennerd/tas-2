import { Option } from "@/schemas/option.schema";
import { Button, Input } from "@material-tailwind/react";
import { useForm } from "react-hook-form";
import { BiAddToQueue } from "react-icons/bi";

interface MultipleChoiceFormProps {
  addOption: (option: Option) => void;
}

type MultipleChoiceFormState = {
  description: string;
};

export function MultipleChoiceForm({ addOption }: MultipleChoiceFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<MultipleChoiceFormState>();

  function onSubmit(data: MultipleChoiceFormState) {
    addOption(data);
  }

  return (
    <div>
      <form className="flex space-x-2" onSubmit={handleSubmit(onSubmit)}>
        <Input label="Descrição" {...register("description")} />
        <Button variant="outlined" size="sm" color="green" type="submit">
          <BiAddToQueue className="text-lg" />
        </Button>
      </form>
    </div>
  );
}
