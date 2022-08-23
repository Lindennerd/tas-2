import { useErrorContext } from "@/context/error.context";
import { SectionOutput, SectionInput } from "@/schemas/section.schema";
import { trpc } from "@/utils/trpc";
import { Button, Input, Switch, Textarea } from "@material-tailwind/react";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";

interface ISectionFormProps {
  mutatedSection?: (section: SectionOutput) => void;
  section?: SectionOutput;
}

export default function SectionForm({
  mutatedSection,
  section,
}: ISectionFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SectionInput>({
    defaultValues: { ...section, description: section?.description ?? "" },
  });

  const sectionCreate = trpc.useMutation(["sections.create"], {
    onError: (error) => setError(error.message),
    onSuccess: (data) => {
      toast.success("Seção criada com sucesso!");
      if (mutatedSection) mutatedSection(data);
    },
  });
  const sectionEdit = trpc.useMutation(["sections.update"], {
    onError: (error) => setError(error.message),
    onSuccess: (data) => {
      toast.success("Seção editada com sucesso!");
      if (mutatedSection) mutatedSection(data);
    },
  });

  async function submit(sectionInput: SectionInput) {
    if (section) {
      await sectionEdit.mutateAsync({ id: section.id, ...sectionInput });
    } else {
      await sectionCreate.mutateAsync(sectionInput);
    }
  }

  const { setError } = useErrorContext();

  return (
    <form onSubmit={handleSubmit(submit)} action="" className="space-y-2">
      <div>
        <Input label="Nome" {...register("name", { required: true })} />
        {errors.name && errors.name.type === "required" && (
          <span>O nome é obrigatório</span>
        )}
      </div>
      <div>
        <Textarea
          label="Descrição"
          {...register("description", { required: true })}
        />
        {errors.description && errors.description.type === "required" && (
          <span>A descrição é obrigatória</span>
        )}
      </div>
      <div>
        <div className="form-check">
          <input
            className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
            type="checkbox"
            id="section-required"
            {...register("required")}
          />
          <label
            className="form-check-label inline-block text-gray-800"
            htmlFor="section-required"
          >
            Seção Obrigatória
          </label>
        </div>
      </div>

      <Button type="submit" variant="filled">
        Salvar
      </Button>

      <ToastContainer />
    </form>
  );
}
