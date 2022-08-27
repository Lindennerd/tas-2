import { Section } from "@/schemas/section.schema";
import { Paper } from "../UI";
import { ManifestQuestion } from "./ManifestQuestion";

interface ManifestSectionProps {
  section: Section;
}

export function ManifestSection(props: ManifestSectionProps) {
  return (
    <Paper className="mb-2">
      <div className="text-center border-b">
        <p className="font-semibold">{props.section?.name}</p>
        <span className="text-gray-500">{props.section?.description}</span>
      </div>
      <div className="w-full">
        {props.section?.questions?.map((question) => (
          <ManifestQuestion question={question} />
        ))}
      </div>
    </Paper>
  );
}
