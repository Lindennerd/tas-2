import { Answer, AnswerInput, AnswerUpdate } from "@/schemas/answer.schema";
import { Comment, CommentInput, CommentUpdate } from "@/schemas/comment.schema";
import { createContext, ReactNode, useContext, useState } from "react";

interface QuestionValueInput {
  id?: string;
  questionId: string;
  value: string;
}

const UnsavedChangesContext = createContext<{
  hasUnsavedChanges: boolean;
  setManifest: (manifestId: string) => void;
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

  function setManifest(manifestId: string) {
    setManifestId(manifestId);
  }

  return (
    <UnsavedChangesContext.Provider
      value={{
        hasUnsavedChanges: unsavedChanges,
        mutateAnswer,
        mutateComment,
        setManifest,
      }}
    >
      {children}
    </UnsavedChangesContext.Provider>
  );
}
