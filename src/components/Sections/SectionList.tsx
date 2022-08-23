import { SectionOutput } from "@/schemas/section.schema";
import { SectionCard } from "@/components/Sections/SectionCard";

interface SectionListProps {
  sections: SectionOutput[];
}

export function SectionList({ sections }: SectionListProps) {
  return (
    <div className=" flex flex-row flex-wrap gap-2 p-8">
      {sections.map((section) => (
        <SectionCard section={section} key={section?.id} />
      ))}
    </div>
  );
}
