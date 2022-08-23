import { SectionOutput } from "@/schemas/section.schema";
import { SectionCard } from "@/components/Sections/SectionCard";
import { Heading, Table, TableCell, TableRow } from "../UI/Table";
import {
  AiOutlineCheckCircle,
  AiOutlineCloseCircle,
  AiOutlineDelete,
  AiOutlineEdit,
} from "react-icons/ai";
import { Button, Dialog, DialogBody } from "@material-tailwind/react";
import { useState } from "react";
import SectionForm from "./SectionForm";

interface SectionListProps {
  sections: SectionOutput[];
  onMutateSections: () => void;
}

export function SectionList({ sections, onMutateSections }: SectionListProps) {
  const [openEdit, setOpenEdit] = useState(false);
  const [selectedSection, setSelectedSection] = useState<SectionOutput>();

  const headings: Heading[] = [
    {
      label: "Nome",
    },
    {
      label: "Descrição",
    },
    { label: "Obrigatória" },
    { label: "" },
  ];

  function editSection(section: SectionOutput) {
    setSelectedSection(section);
    setOpenEdit(true);
  }
  function removeSection(section: SectionOutput) {}

  return (
    <>
      <Table headings={headings}>
        {sections.map((section) => (
          <TableRow key={section?.id}>
            <TableCell>{section?.name}</TableCell>
            <TableCell>{section?.description}</TableCell>
            <TableCell>
              <div className="text-center">
                {section?.required ? (
                  <AiOutlineCheckCircle className="text-lg text-green-500" />
                ) : (
                  <AiOutlineCloseCircle className="text-lg text-red-500" />
                )}
              </div>
            </TableCell>
            <TableCell>
              <div className="flex space-x-2">
                <Button
                  className="p-1 rounded-full"
                  onClick={(e) => editSection(section)}
                >
                  <AiOutlineEdit className="text-lg" />
                </Button>
                <Button
                  className="p-1 rounded-full"
                  color="red"
                  onClick={(e) => removeSection(section)}
                >
                  <AiOutlineDelete className="text-lg" />
                </Button>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </Table>

      <Dialog open={openEdit} handler={setOpenEdit}>
        <DialogBody>
          <div className="w-full">
            <SectionForm
              section={selectedSection}
              onMutatedSection={() => {
                setOpenEdit(false);
                onMutateSections();
              }}
            />
          </div>
        </DialogBody>
      </Dialog>
    </>
  );
}
