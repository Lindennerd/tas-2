import useSectionService from "@/hooks/useSectionService";
import { Section } from "@/schemas/section.schema";
import { Button } from "@material-tailwind/react";
import { useState } from "react";
import Select from "react-select";

interface SectionPickProps {
  onPick: (id: string) => void;
}

type Option = {
  value: string;
  label: string;
};

export function SectionPick(props: SectionPickProps) {
  const { findAllOptionals } = useSectionService();
  const [options, setOptions] = useState<Option[]>([]);
  const [selectedSection, setSelectedSection] = useState<string | undefined>(
    ""
  );

  findAllOptionals({
    onSuccess: (sections: Section[]) => {
      setOptions(
        sections?.map((section) => {
          return { value: section!.id, label: section!.name };
        })
      );
    },
  });

  function addSection() {
    setOptions(options.filter((option) => option.value !== selectedSection));
    props.onPick(selectedSection!);
  }

  return (
    <div className="flex gap-4 w-full">
      <Select
        options={options}
        className="w-full"
        placeholder="Selecione a seção para adicionar ao manifesto"
        onChange={(selected) => setSelectedSection(selected?.value)}
      />
      <Button
        size="sm"
        color="green"
        variant="outlined"
        onClick={() => addSection()}
      >
        Adicionar
      </Button>
    </div>
  );
}
