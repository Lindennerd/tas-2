import { useErrorContext } from "@/context/error.context";
import { trpc } from "@/utils/trpc";
import { Button } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { Table, TableRow, TableCell, Heading } from "../UI/Table";
import { QuestionAddButton } from "./QuestionAddButton";

interface QuestionsListProps {
  sectionId: string;
}

export function QuestionsList({ sectionId }: QuestionsListProps) {
  const [enableQuery, setEnableQuery] = useState(false);
  const { setError } = useErrorContext();

  const {
    data: questions,
    isLoading,
    error,
  } = trpc.useQuery(["questions.findManyBySection", { section: sectionId }], {
    enabled: enableQuery,
    onError: (error) => setError(error.message),
    onSuccess: (data) => {
      setEnableQuery(false);
    },
  });

  useEffect(() => {
    if (sectionId) setEnableQuery(true);
  }, []);

  const headings: Heading[] = [
    { label: "Peso", size: 16 },
    { label: "Descrição" },
    { label: "Apoio" },
    { label: "Tipo" },
    {
      element: <QuestionAddButton enabled={sectionId !== ""} />,
      size: 20,
    },
  ];

  return (
    <div>
      <Table headings={headings}>
        {questions &&
          questions.map((question) => (
            <TableRow key={question.id}>
              <TableCell>{question.weight}</TableCell>
              <TableCell>{question.description}</TableCell>
              <TableCell>{question.help}</TableCell>
              <TableCell>{question.type}</TableCell>
            </TableRow>
          ))}
      </Table>
    </div>
  );
}
