import { useErrorContext } from "@/context/error.context";
import { Question, QuestionType } from "@/schemas/question.schema";
import { trpc } from "@/utils/trpc";
import {
  Button,
  Dialog,
  DialogBody,
  DialogHeader,
} from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { MultipleChoiceForm } from "../Options/MultipleChoiceForm";
import { OptionsList } from "../Options/OptionsList";
import Loading from "../UI/Loading";
import { Table, TableRow, TableCell, Heading } from "../UI/Table";
import { QuestionAddButton } from "./QuestionAddButton";

import { FileFormChoiceForm } from "../Options/FileChoiceForm";
import { BiEdit, BiTrash } from "react-icons/bi";
import { toast, ToastContainer } from "react-toastify";

interface QuestionsListProps {
  sectionId: string;
}

export function QuestionsList({ sectionId }: QuestionsListProps) {
  const [enableQuery, setEnableQuery] = useState(false);
  const [toggleMultiplechoiceDialog, setToggleMultipleChoiceDialog] =
    useState(false);
  const [toggleFileDialog, setToggleFileDialog] = useState(false);
  const [toggleEditQuestion, setToggleEditQuestion] = useState(false);
  const [selectedQuestion, setSelectedQuestion] = useState<Question | null>(
    null
  );
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
      if (selectedQuestion) {
        const question = data.find(
          (question) => question.id === selectedQuestion.id
        );
        if (question) {
          setSelectedQuestion(question);
        }
      }
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
      element: (
        // TODO fix prop drilling
        <QuestionAddButton
          question={selectedQuestion}
          sectionId={sectionId}
          onQuestionAdded={() => {
            setEnableQuery(true);
            setToggleEditQuestion(false);
          }}
          toggle={toggleEditQuestion}
        />
      ),
      size: 20,
    },
  ];

  const getQuestionType = (type: string, question: Question) => {
    const questionType =
      Object.values(QuestionType)[Object.keys(QuestionType).indexOf(type)];
    if (type === "multipleChoice")
      return (
        <Button
          size="sm"
          variant="outlined"
          onClick={(e) => {
            setSelectedQuestion(question);
            setToggleMultipleChoiceDialog(true);
          }}
        >
          Múltipla Escolha ({question?.Option.length})
        </Button>
      );
    if (type === "file")
      return (
        <Button
          size="sm"
          variant="outlined"
          onClick={(e) => {
            setSelectedQuestion(question);
            setToggleFileDialog(true);
          }}
        >
          Arquivo
        </Button>
      );
    else return <span>{questionType}</span>;
  };

  function editQuestion(question: Question) {
    setSelectedQuestion(question);
    setToggleEditQuestion(true);
  }

  const deleteQuestion = trpc.useMutation(["questions.delete"], {
    onSuccess: () => {
      setEnableQuery(true);
      toast.warn("Questão deletada");
    },
    onError: (error) => setError(error.message),
  });

  async function removeQuestion(question: Question) {
    if (!question) return;
    await deleteQuestion.mutateAsync(question.id);
  }

  return (
    <div>
      <ToastContainer />
      {isLoading && <Loading />}
      <Table headings={headings}>
        {questions &&
          questions.map((question) => (
            <TableRow key={question.id}>
              <TableCell>{question.weight}</TableCell>
              <TableCell>{question.description}</TableCell>
              <TableCell>{question.help}</TableCell>
              <TableCell>{getQuestionType(question.type, question)}</TableCell>
              <TableCell>
                <div className="space-x-2">
                  <Button
                    size="sm"
                    variant="outlined"
                    className="rounded-full p-1"
                    onClick={() => editQuestion(question)}
                  >
                    <BiEdit className="text-lg" />
                  </Button>
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

      <Dialog
        handler={setToggleMultipleChoiceDialog}
        open={toggleMultiplechoiceDialog}
        size="lg"
      >
        <DialogHeader>Opções</DialogHeader>
        <DialogBody>
          <div className="w-full space-y-2">
            <MultipleChoiceForm
              question={selectedQuestion}
              onAddOption={() => setEnableQuery(true)}
            />
            <OptionsList
              options={selectedQuestion?.Option}
              onRemoveOption={() => setEnableQuery(true)}
            />
          </div>
        </DialogBody>
      </Dialog>

      <Dialog handler={setToggleFileDialog} open={toggleFileDialog} size="lg">
        <DialogHeader>Tipos de Arquivo</DialogHeader>
        <DialogBody>
          <div className="w-full space-y-2">
            <FileFormChoiceForm
              questionId={selectedQuestion ? selectedQuestion.id : ""}
              extension={selectedQuestion?.Extensions[0]}
              onSaveExtensions={() => {
                setEnableQuery(true);
                setToggleFileDialog(!toggleFileDialog);
              }}
            />
          </div>
        </DialogBody>
      </Dialog>
    </div>
  );
}
