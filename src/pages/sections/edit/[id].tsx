import { QuestionsList } from "@/components/Questions/QuestionsList";
import SectionForm from "@/components/Sections/SectionForm";
import { Paper } from "@/components/UI";
import Loading from "@/components/UI/Loading";
import useSectionService from "@/hooks/useSectionService";
import { Section } from "@/schemas/section.schema";
import { Typography } from "@material-tailwind/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { TbSection } from "react-icons/tb";

export default function EditSection() {
  const router = useRouter();
  const { findFirst } = useSectionService();
  const { id } = router.query;

  const { isLoading, data: section, refetch } = findFirst(id as string);

  useEffect(() => {
    refetch();
  }, []);

  return (
    <div className="px-8 space-y-2">
      {isLoading && <Loading />}
      <Paper>
        <div>
          <SectionForm
            onMutatedSection={(mutatedSection) => refetch()}
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
