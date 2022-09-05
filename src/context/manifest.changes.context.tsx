import { Answer, AnswerInput, AnswerUpdate } from "@/schemas/answer.schema";
import { Comment, CommentInput, CommentUpdate } from "@/schemas/comment.schema";
import { createContext, ReactNode, useContext, useState } from "react";

interface QuestionValueInput {
  id?: string;
  questionId: string;
  value: string;
}

interface FileInput {
  id?: string;
  questionId: string;
  fileBase64: string;
}

const UnsavedChangesContext = createContext<{
  hasUnsavedChanges: boolean;
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
    console.log("saving");
    setUnsavedChanges(false);
  }

  return (
    <UnsavedChangesContext.Provider
      value={{
        hasUnsavedChanges: unsavedChanges,
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
