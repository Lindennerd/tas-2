import { useFormatDate } from "@/hooks/useFormatDate";
import { ManifestOutput } from "@/schemas/manifest.schema";
import { useEffect, useState } from "react";
import { SectionPick } from "../Sections/SectionPick";
import { Paper } from "../UI";

import { Section } from "@/schemas/section.schema";
import useSectionService from "@/hooks/useSectionService";
import { ManifestSection } from "./ManifestSection";
import { Alert, Button } from "@material-tailwind/react";
import { useManifestService } from "@/hooks/useManifestService";
import { BiInfoSquare, BiSave } from "react-icons/bi";
import { useUnsavedChangesContext } from "@/context/manifest.changes.context";

interface ManifestFormProps {
  manifest: ManifestOutput;
}

export function ManifestForm(props: ManifestFormProps) {
  const formatDate = useFormatDate();
  const { findFirst } = useSectionService();
  const { addSection } = useManifestService();
  const changesContext = useUnsavedChangesContext();

  const [sections, setSections] = useState<Section[]>();
  const [sectionPicked, setSectionPicked] = useState("");

  findFirst(sectionPicked, {
    enabled: sectionPicked !== "",
    onSuccess: (section: Section) => {
      setSections((curr) => [...(curr ?? []), section]);
      addSection(section!.id, props.manifest!.id);
    },
  });

  useEffect(() => {
    setSections(props.manifest?.sections);
    if (props.manifest) changesContext.setManifest(props.manifest!.id);
  }, [props.manifest]);

  return (
    <div className="space-y-2 px-2">
      <Paper>
        <h1 className="uppercase text-center font-semibold">
          Manifesto do Ativo {props.manifest?.asset.name}
        </h1>
        <p className="text-center text-gray-600">
          Cadastrado em {formatDate(props.manifest?.asset.createdAt)}
        </p>
      </Paper>
      <Paper className="flex justify-start gap-2 items-center sticky top-16 bg-white z-10 ">
        <Button
          size="sm"
          variant="outlined"
          color="blue"
          className="flex items-center gap-2"
          disabled={!changesContext.hasUnsavedChanges}
          onClick={(e) => {
            console.log("click");
            changesContext.saveChanges();
          }}
        >
          <BiSave className="text-lg" />
          Salvar
        </Button>
        <SectionPick onPick={(sectionId) => setSectionPicked(sectionId)} />
      </Paper>
      <div className="flex flex-wrap gap-2 w-full">
        <Paper>
          <div className="flex flex-col sticky top-40">
            {sections &&
              sections.map((section, index) => (
                <a
                  key={section?.id}
                  className="hover:border-b hover:font-semibold cursor-pointer text-primary"
                >
                  {index + 1}. {section?.name}
                </a>
              ))}
          </div>
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
