import { useErrorContext } from "@/context/error.context";
import { QuestionOutput } from "@/schemas/question.schema";
import { trpc } from "@/utils/trpc";
import { Button } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import Loading from "../UI/Loading";
import { Table, TableRow, TableCell, Heading } from "../UI/Table";
import { QuestionAddButton } from "./QuestionAddButton";

import { BiTrash } from "react-icons/bi";
import { toast, ToastContainer } from "react-toastify";
import { QuestionTypeButton } from "./QuestionTypeButton";
import { QuestionEditButton } from "./QuestionEditButton";

interface QuestionsListProps {
  sectionId: string;
}

export function QuestionsList({ sectionId }: QuestionsListProps) {
  const { setError } = useErrorContext();

  const {
    data: questions,
    isLoading,
    refetch,
  } = trpc.useQuery(["questions.findManyBySection", { section: sectionId }], {
    onError: (error) => setError(error.message),
  });

  const headings: Heading[] = [
    { label: "Peso", size: 16 },
    { label: "Descrição" },
    { label: "Apoio" },
    { label: "Tipo" },
    {
      element: (
        <QuestionAddButton
          sectionId={sectionId}
          onQuestionAdded={() => refetch()}
        />
      ),
      size: 20,
    },
  ];

  const deleteQuestion = trpc.useMutation(["questions.delete"], {
    onSuccess: () => {
      refetch();
      toast.warn("Questão deletada");
    },
    onError: (error) => setError(error.message),
  });

  async function removeQuestion(question: QuestionOutput) {
    if (!question) return;
    await deleteQuestion.mutateAsync(question.id);
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
