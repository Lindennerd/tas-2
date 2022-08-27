import useSectionService from "@/hooks/useSectionService";
import { Section, SectionInput } from "@/schemas/section.schema";
import { Button, Input, Textarea } from "@material-tailwind/react";
import { useForm } from "react-hook-form";
import { BiSave } from "react-icons/bi";
import { toast, ToastContainer } from "react-toastify";

interface ISectionFormProps {
  onMutatedSection?: (mutated: Section) => void;
  section?: Section;
}

export default function SectionForm({
  onMutatedSection: mutatedSection,
  section,
}: ISectionFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SectionInput>({
    defaultValues: { ...section, description: section?.description ?? "" },
  });

  const { create, edit } = useSectionService();

  async function submit(sectionInput: SectionInput) {
    if (section) {
      const mutated = await edit({ id: section.id, ...sectionInput });
      toast.success("Seção editada com sucesso!");
      if (mutatedSection) mutatedSection(mutated);
    } else {
      const mutated = await create(sectionInput);
      toast.success("Seção criada com sucesso!");
      if (mutatedSection) mutatedSection(mutated);
    }
  }

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
      <div className="flex justify-between">
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
        <Button
          size="md"
          type="submit"
          variant="filled"
          color="green"
          className="flex gap-2 items-center"
        >
          <BiSave className="text-lg" />
          <span>Salvar</span>
        </Button>
      </div>

      <ToastContainer />
    </form>
  );
}
