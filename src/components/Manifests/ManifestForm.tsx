import { useFormatDate } from "@/hooks/useFormatDate";
import { ManifestOutput } from "@/schemas/manifest.schema";
import { useEffect, useState } from "react";
import { SectionPick } from "../Sections/SectionPick";
import { Paper } from "../UI";

import { Section } from "@/schemas/section.schema";
import useSectionService from "@/hooks/useSectionService";
import { ManifestSection } from "./ManifestSection";

interface ManifestFormProps {
  manifest: ManifestOutput;
}

export function ManifestForm(props: ManifestFormProps) {
  const formatDate = useFormatDate();
  const { findFirst } = useSectionService();
  const [sections, setSections] = useState<Section[]>();
  const [sectionPicked, setSectionPicked] = useState("");

  findFirst(sectionPicked, {
    enabled: sectionPicked !== "",
    onSuccess: (section: Section) => setSections((curr) => [...curr!, section]),
  });

  useEffect(() => {
    setSections(props.manifest?.sections);
  }, [props.manifest]);

  return (
    <div className="px-4 space-y-2">
      <Paper>
        <h1 className="uppercase text-center font-semibold">
          Manifesto do Ativo {props.manifest?.asset.name}
        </h1>
        <p className="text-center text-gray-600">
          Cadastrado em {formatDate(props.manifest?.asset.createdAt)}
        </p>
      </Paper>

      <Paper>
        <SectionPick onPick={(sectionId) => setSectionPicked(sectionId)} />
      </Paper>

      <div className="flex flex-wrap gap-2 w-full">
        <Paper>
          <div>Sections</div>
        </Paper>
        <div className="flex-1">
          {sections &&
            sections.map((section) => (
              <ManifestSection section={section} key={section?.id} />
            ))}
        </div>
      </div>
    </div>
  );
}
