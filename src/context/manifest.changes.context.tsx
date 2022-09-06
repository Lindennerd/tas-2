import { Answer, AnswerInput, AnswerUpdate } from "@/schemas/answer.schema";
import { Comment, CommentInput, CommentUpdate } from "@/schemas/comment.schema";
import { trpc } from "@/utils/trpc";
import { createContext, ReactNode, useContext, useState } from "react";
import { useErrorContext } from "./error.context";

interface QuestionValueInput {
  id?: string;
  questionId: string;
  value: string;
  manifestId: string;
}

interface FileInput {
  id?: string;
  questionId: string;
  fileBase64: string;
}

const UnsavedChangesContext = createContext<{
  hasUnsavedChanges: boolean;
  manifestId: string;
  setManifest: (manifestId: string) => void;
  mutateFile: ({ questionId, fileBase64 }: FileInput) => void;
  mutateAnswer: ({ questionId, value, id }: QuestionValueInput) => void;
  mutateComment: ({ questionId, value, id }: QuestionValueInput) => void;
  saveChanges: () => void;
} | null>(null);

export function useUnsavedChangesContext() {
  const context = useContext(UnsavedChangesContext);
  if (!context) throw Error("UnsavedChanges context is null here");
  return context;
}

export function UnsavedChangesProvider({ children }: { children: ReactNode }) {
  const [unsavedChanges, setUnsavedChanges] = useState<boolean>(false);
  const [answers, setAnswers] = useState<QuestionValueInput[]>();
  const [comments, setComments] = useState<Comment[]>();
  const [manifestId, setManifestId] = useState("");

  const { setError } = useErrorContext();

  const answersMutation = trpc.useMutation(["answers.createMany"], {
    onError: (error) => setError(error.message),
  });

  function mutateAnswer(answer: QuestionValueInput) {
    setUnsavedChanges(true);
    setAnswers((curr) => {
      const draft = curr?.filter(
        (a) => a && a.questionId !== answer.questionId
      );
      return [
        ...(draft ?? []),
        {
          manifestId: manifestId,
          questionId: answer.questionId,
          id: answer.id ?? "",
          value: answer.value,
        },
      ];
    });
  }

  function mutateComment(comment: QuestionValueInput) {
    setUnsavedChanges(true);
  }

  function mutateFile({ fileBase64, questionId, id }: FileInput) {
    setUnsavedChanges(true);
    setAnswers((curr) => {
      const draft = curr?.filter((a) => a && a.questionId !== questionId);
      return [
        ...(draft ?? []),
        {
          manifestId: manifestId,
          questionId: questionId,
          id: id ?? "",
          value: fileBase64,
        },
      ];
    });
  }

  function setManifest(manifestId: string) {
    setManifestId(manifestId);
  }

  function saveChanges() {
    setUnsavedChanges(false);
    if (answers) answersMutation.mutate(answers);
  }

  return (
    <UnsavedChangesContext.Provider
      value={{
        hasUnsavedChanges: unsavedChanges,
        manifestId,
        mutateAnswer,
        mutateComment,
        mutateFile,
        setManifest,
        saveChanges,
      }}
    >
      {children}
    </UnsavedChangesContext.Provider>
  );
}
