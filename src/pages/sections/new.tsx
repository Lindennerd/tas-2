import { QuestionsList } from "@/components/Questions/QuestionsList";
import SectionForm from "@/components/Sections/SectionForm";
import { Section } from "@/schemas/section.schema";
import { Typography } from "@material-tailwind/react";
import { useState } from "react";

export default function NewSectionPage() {
  const [section, setSection] = useState<Section | null>(null);

  return (
    <>
      <Typography variant="h5" className="mb-2 text-center">
        Cadastro de Seção
      </Typography>
      <div>
        <SectionForm
          mutatedSection={(mutatedSection) => setSection(mutatedSection)}
          section={section}
        />
      </div>
      <div>
        <QuestionsList sectionId={section ? section.id : ""} />
      </div>
    </>
  );
}
