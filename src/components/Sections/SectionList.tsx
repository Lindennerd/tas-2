import { Section } from "@/schemas/section.schema";

interface SectionListProps {
  sections: Section[];
}

export function SectionList({ sections }: SectionListProps) {
  return <div>SectionList</div>;
}
