import { useExtensionsService } from "@/hooks/useExtensionsService";
import { ExtensionOutput } from "@/schemas/extension.schema";
import { Button } from "@material-tailwind/react";
import { useForm } from "react-hook-form";

export type FileExtensions = {
  extensions: string[];
  description: string;
};

type FileExtensionsState = {
  description: string;
};

interface FileExtensionsProps {
  questionId: string;
  onSaveExtensions: () => void;
  extension?: ExtensionOutput;
}

export function FileFormChoiceForm({
  questionId,
  extension,
}: FileExtensionsProps) {
  const { register, handleSubmit } = useForm<FileExtensionsState>();
  const { create, update } = useExtensionsService();

  const extensions: FileExtensions[] = [
    {
      extensions: ["jpg", "jpeg", "png", "gif"],
      description: "Imagens",
    },
    {
      extensions: ["pdf", "doc", "docx"],
      description: "Documentos",
    },
    {
      extensions: ["xlxs", "xls", "xlsx"],
      description: "Planilhas",
    },
  ];

  async function onSubmit(data: FileExtensionsState) {
    if (extension) {
      await update({
        ...data,
        questionId: questionId,
        id: extension.id,
      });
    } else {
      await create({ ...data, questionId: questionId });
    }
  }

  return (
    <div>
      <form className="space-y-2" onSubmit={handleSubmit(onSubmit)}>
        <select
          {...register("description")}
          className="form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          aria-label="Tipo de Questão"
        >
          {extensions.map((ext) => (
            <option value={ext.extensions}>{ext.description}</option>
          ))}
        </select>
        <Button type="submit" color="green">
          Salvar
        </Button>
      </form>
    </div>
  );
}
