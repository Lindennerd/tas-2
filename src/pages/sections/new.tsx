import { QuestionsList } from "@/components/Questions/QuestionsList";
import SectionForm from "@/components/Sections/SectionForm";
import { Paper } from "@/components/UI";
import { Section } from "@/schemas/section.schema";
import { Button, Typography } from "@material-tailwind/react";
import { useRouter } from "next/router";
import { useState } from "react";
import { BiAddToQueue } from "react-icons/bi";
import { TbSection } from "react-icons/tb";

export default function NewSectionPage() {
  const [section, setSection] = useState<Section | null>(null);

  const router = useRouter();

  return (
    <div className="px-8 space-y-2">
      <div className="flex justify-between">
        <Typography variant="h6" className="flex gap-4">
          <TbSection className="text-2xl" />
          Cadastro de Seção
        </Typography>
        <Button
          variant="outlined"
          onClick={() => {
            setSection(null);
          }}
          className="p-2 space-x-1 flex items-center whitespace-nowrap"
          color="green"
        >
          <BiAddToQueue className="text-2xl" />
          <span>Nova Seção</span>
        </Button>
      </div>
      <Paper>
        <div>
          <SectionForm
            onMutatedSection={(mutatedSection) => setSection(mutatedSection)}
            section={section}
          />
        </div>
      </Paper>
      <Paper>
        <QuestionsList sectionId={section ? section.id : ""} canAdd={true} />
      </Paper>
    </div>
  );
}
