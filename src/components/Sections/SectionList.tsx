import { Section } from "@/schemas/section.schema";

interface SectionListProps {
  sections: Section[];
}

export function SectionList({ sections }: SectionListProps) {
  return (
    <div>
      {sections.map((section) => {
        if (section) {
          return (
            <div key={section.id}>
              <h2>{section.name}</h2>
            </div>
          );
        }
      })}
    </div>
  );
}