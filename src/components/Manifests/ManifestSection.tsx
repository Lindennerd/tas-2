import { Section } from "@/schemas/section.schema";

interface ManifestSectionProps {
  section: Section;
}

export function ManifestSection(props: ManifestSectionProps) {
  return (
    <div>
      {props.section?.name}
      {props.section?.description}
      {props.section?.questions?.map((question) => (
        <div>{question.description}</div>
      ))}
    </div>
  );
}
