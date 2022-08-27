import { QuestionsList } from "@/components/Questions/QuestionsList";
import SectionForm from "@/components/Sections/SectionForm";
import { Paper } from "@/components/UI";
import { Section } from "@/schemas/section.schema";
import { Typography } from "@material-tailwind/react";
import { useState } from "react";
import { TbSection } from "react-icons/tb";

export default function NewSectionPage() {
  const [section, setSection] = useState<Section | null>(null);

  return (
    <div className="px-8 space-y-2">
      <Typography variant="h6" className="flex gap-4">
        <TbSection className="text-2xl" />
        Cadastro de Seção
      </Typography>
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
