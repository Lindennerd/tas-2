import { Answer, AnswerInput, AnswerUpdate } from "@/schemas/answer.schema";
import { Comment, CommentInput, CommentUpdate } from "@/schemas/comment.schema";
import { createContext, ReactNode, useContext, useState } from "react";

interface QuestionValueInput {
  id?: string;
  questionId: string;
  value: string;
}

interface FileInput {
  questionId: string;
  fileBase64: string;
}

const UnsavedChangesContext = createContext<{
  hasUnsavedChanges: boolean;
  setManifest: (manifestId: string) => void;
  mutateFile: ({ questionId, fileBase64 }: FileInput) => void;
  mutateAnswer: ({ questionId, value, id }: QuestionValueInput) => void;
  mutateComment: ({ questionId, value, id }: QuestionValueInput) => void;
} | null>(null);

export function useUnsavedChangesContext() {
  const context = useContext(UnsavedChangesContext);
  if (!context) throw Error("UnsavedChanges context is null here");
  return context;
}

export function UnsavedChangesProvider({ children }: { children: ReactNode }) {
  const [unsavedChanges, setUnsavedChanges] = useState<boolean>(false);
  const [answers, setAnswers] = useState<Answer[]>();
  const [comments, setComments] = useState<Comment[]>();
  const [manifestId, setManifestId] = useState("");

  function mutateAnswer(answer: QuestionValueInput) {}

  function mutateComment(comment: QuestionValueInput) {}

  function mutateFile({ fileBase64, questionId }: FileInput) {}

  function setManifest(manifestId: string) {
    setManifestId(manifestId);
  }

  return (
    <UnsavedChangesContext.Provider
      value={{
        hasUnsavedChanges: unsavedChanges,
        mutateAnswer,
        mutateComment,
        mutateFile,
        setManifest,
      }}
    >
      {children}
    </UnsavedChangesContext.Provider>
  );
}
