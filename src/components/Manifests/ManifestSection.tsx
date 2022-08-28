import { Section } from "@/schemas/section.schema";
import { Paper } from "../UI";
import { ManifestQuestion } from "./ManifestQuestion";

interface ManifestSectionProps {
  section: Section;
}

export function ManifestSection(props: ManifestSectionProps) {
  return (
    <div className="rounded-md shadow-md mb-2 border">
      <div className="p-2 bg-blue-gray-50 space-x-2 rounded-t-md border-b">
        <span className="font-semibold">{props.section?.name}</span>
        <span className="text-gray-500">{props.section?.description}</span>
      </div>
      <div className="w-full">
        {props.section?.questions?.map((question) => (
          <div className="border-b">
            <ManifestQuestion question={question} key={question.id} />
          </div>
        ))}
      </div>
    </div>
  );
}
