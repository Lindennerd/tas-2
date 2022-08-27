import { Section } from "@/schemas/section.schema";
import { Heading, Table, TableCell, TableRow } from "../UI/Table";
import {
  AiOutlineCheckCircle,
  AiOutlineCloseCircle,
  AiOutlineDelete,
  AiOutlineEdit,
} from "react-icons/ai";
import {
  Alert,
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { useState } from "react";
import SectionForm from "./SectionForm";
import useSectionService from "@/hooks/useSectionService";
import { useRouter } from "next/router";
import { VscWarning } from "react-icons/vsc";
import { QuestionsList } from "../Questions/QuestionsList";

interface SectionListProps {
  sections: Section[];
  onMutateSections: () => void;
}

export function SectionList({ sections, onMutateSections }: SectionListProps) {
  const router = useRouter();
  const { remove } = useSectionService();
  const [openRemoveDialog, setOpenRemoveDialog] = useState(false);
  const [openQuestionsDialog, setOpenQuestionsDialog] = useState(false);
  const [selectedSection, setSelectedSection] = useState<Section>();

  const headings: Heading[] = [
    {
      label: "Nome",
    },
    {
      label: "Descrição",
    },
    { label: "Obrigatória", size: 10 },
    { label: "Questões" },
    { label: "" },
  ];

  function editSection(section: Section) {
    setSelectedSection(section);
    setOpenRemoveDialog(true);
  }

  function goToEditSection(id: string) {
    router.push(`sections/edit/${id}`);
  }

  async function removeSection(section: Section) {
    if (!section) return;
    await remove(section.id);
    onMutateSections();
    setOpenRemoveDialog(false);
  }

  return (
    <>
      <Table headings={headings}>
        {sections.map((section) => (
          <TableRow key={section?.id}>
            <TableCell>{section?.name}</TableCell>
            <TableCell>{section?.description}</TableCell>
            <TableCell>
              <div className="flex justify-center items-center">
                {section?.required ? (
                  <AiOutlineCheckCircle className="text-lg text-green-500" />
                ) : (
                  <AiOutlineCloseCircle className="text-lg text-red-500" />
                )}
              </div>
            </TableCell>
            <TableCell>
              <Button
                variant="outlined"
                size="sm"
                onClick={(e) => {
                  setSelectedSection(section);
                  setOpenQuestionsDialog(true);
                }}
              >
                Questões ({section?.questions.length})
              </Button>
            </TableCell>
            <TableCell>
              <div className="flex gap-2 items-center justify-center">
                <Button
                  className="p-1 rounded-full"
                  onClick={(e) => goToEditSection(section!.id)}
                >
                  <AiOutlineEdit className="text-lg" />
                </Button>
                <Button
                  className="p-1 rounded-full"
                  color="red"
                  onClick={(e) => {
                    setSelectedSection(section);
                    setOpenRemoveDialog(true);
                  }}
                >
                  <AiOutlineDelete className="text-lg" />
                </Button>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </Table>

      <Dialog open={openRemoveDialog} handler={setOpenRemoveDialog}>
        <DialogBody>
          <div className="w-full text-center">
            <Alert color="yellow">
              <div className="flex gap-2 items-center justify-between">
                <VscWarning className="text-lg" />
                <div>
                  <span className="font-semibold">
                    Atenção! Essa ação não pode ser desfeita
                  </span>
                  <p>
                    Tem certeza que deseja exluir a seção
                    {selectedSection?.name} ?
                  </p>
                </div>
              </div>
            </Alert>
          </div>
        </DialogBody>
        <DialogFooter>
          <div className="flex items-center justify-between">
            <Button
              size="sm"
              color="green"
              onClick={(e) => removeSection(selectedSection!)}
            >
              Sim
            </Button>
            <Button
              size="sm"
              color="red"
              onClick={(e) => setOpenRemoveDialog(false)}
            >
              Não
            </Button>
          </div>
        </DialogFooter>
      </Dialog>

      <Dialog open={openQuestionsDialog} handler={setOpenQuestionsDialog}>
        <DialogBody>
          {selectedSection && (
            <QuestionsList sectionId={selectedSection!.id} canAdd={false} />
          )}
        </DialogBody>
      </Dialog>
    </>
  );
}
