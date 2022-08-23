import { SectionOutput } from "@/schemas/section.schema";
import { Button, Typography } from "@material-tailwind/react";
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from "react-icons/ai";

interface SectionCardProps {
  section: SectionOutput;
}

export function SectionCard({ section }: SectionCardProps) {
  return (
    <div className="shadow border rounded min-w-[10rem] max-w-[10rem] min-h-[12rem] max-h-[12rem]">
      <div className="p-2  text-center font-semibold border-b bg-gray-100">
        {section?.name}
      </div>
      <div className="p-2 space-y-2">
        <div className="flex items-center gap-2">
          {section?.required ? (
            <AiOutlineCheckCircle className="text-lg text-green-500" />
          ) : (
            <AiOutlineCloseCircle className="text-lg text-red-500" />
          )}
          <span>Obrigatória</span>
        </div>
        <div className="border rounded p-2">{section?.description}</div>
      </div>
      <div className="border-t">
        <Button size="sm">Editar</Button>
      </div>
    </div>
  );
}
