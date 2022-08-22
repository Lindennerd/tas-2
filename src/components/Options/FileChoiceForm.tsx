import { Radio } from "@material-tailwind/react";

export type FileExtensions = {
  extensions: string[];
  description: string;
};

export function FileFormChoiceForm() {
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

  return (
    <div>
      {extensions.map((extension, index) => (
        <div key={index}>
          <div className="form-check">
            <input
              className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
              value={extension.extensions.join(",")}
            />
            <label
              className="form-check-label inline-block text-gray-800"
              htmlFor="flexRadioDefault1"
            >
              {extension.description}
            </label>
          </div>
        </div>
      ))}
    </div>
  );
}
