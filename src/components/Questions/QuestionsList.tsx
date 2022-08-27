import { QuestionOutput } from "@/schemas/question.schema";
import { Button } from "@material-tailwind/react";
import Loading from "../UI/Loading";
import { Table, TableRow, TableCell, Heading } from "../UI/Table";
import { QuestionAddButton } from "./QuestionAddButton";

import { BiTrash } from "react-icons/bi";
import { ToastContainer } from "react-toastify";
import { QuestionTypeButton } from "./QuestionTypeButton";
import { QuestionEditButton } from "./QuestionEditButton";
import { useQuestionService } from "@/hooks/useQuestionService";

interface QuestionsListProps {
  sectionId: string;
  canAdd: boolean;
}

export function QuestionsList({ sectionId, canAdd }: QuestionsListProps) {
  const { findManyBySection, delete: remove } = useQuestionService();

  const { data: questions, isLoading, refetch } = findManyBySection(sectionId);

  const headings: Heading[] = [
    { label: "Peso", size: 16 },
    { label: "Descrição" },
    { label: "Apoio" },
    { label: "Tipo" },
    {
      element: (
        <QuestionAddButton
          sectionId={canAdd ? sectionId : undefined}
          onQuestionAdded={() => refetch()}
        />
      ),
      size: 20,
    },
  ];

  async function removeQuestion(question: QuestionOutput) {
    if (!question) return;
    await remove(question.id);
  }

  return (
    <>
      <ToastContainer />
      {isLoading && <Loading />}
      <Table headings={headings}>
        {questions &&
          questions.map((question) => (
            <TableRow key={question.id}>
              <TableCell>{question.weight}</TableCell>
              <TableCell>{question.description}</TableCell>
              <TableCell>{question.help}</TableCell>
              <TableCell>
                {
                  <QuestionTypeButton
                    question={question}
                    onMutateQuestion={() => refetch()}
                  />
                }
              </TableCell>
              <TableCell>
                <div className="space-x-2">
                  <QuestionEditButton
                    question={question}
                    onQuestionMutate={() => refetch()}
                  />
                  <Button
                    variant="outlined"
                    size="sm"
                    color="red"
                    className="rounded-full p-1"
                    disabled={isLoading}
                    onClick={() => removeQuestion(question)}
                  >
                    <BiTrash className="text-lg" />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
      </Table>
    </>
  );
}
