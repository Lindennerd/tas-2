import { QuestionInput, QuestionUpdate } from "./../schemas/question.schema";
import { trpc } from "@/utils/trpc";
import useOnError from "./useOnError";

enum TRPC {
  create = "questions.create",
  update = "questions.update",
  delete = "questions.delete",
  findManyBySection = "questions.findManyBySection",
}

export function useQuestionService() {
  const { onError } = useOnError();
  const questionCreate = trpc.useMutation([TRPC.create], { onError });
  const questionUpdate = trpc.useMutation([TRPC.update], { onError });
  const deleteQuestion = trpc.useMutation([TRPC.delete], { onError });
  return {
    create: async (question: QuestionInput) => {
      return await questionCreate.mutateAsync(question);
    },

    update: async (question: QuestionUpdate) => {
      return await questionUpdate.mutateAsync(question);
    },

    delete: async (questionId: string) => {
      return await deleteQuestion.mutateAsync(questionId);
    },

    findManyBySection: (sectionId: string, opts?: any) => {
      return trpc.useQuery([TRPC.findManyBySection, { section: sectionId }], {
        ...opts,
        onError,
      });
    },
  };
}
