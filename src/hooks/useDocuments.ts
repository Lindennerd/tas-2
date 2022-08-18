import { useState } from "react";
import {
  Document,
  DocumentEdit,
  DocumentInput,
} from "../schemas/document.schema";
import { trpc } from "../utils/trpc";

export function useDocuments() {
  const [enableGet, setEnableGet] = useState(false);
  const [filterParam, setFilterParam] = useState<string>("");
  const [documents, setDocuments] = useState<Document[]>([]);
  const [loading, setLoading] = useState(false);

  const createDocument = trpc.useMutation(["documents.create"]);
  const editDocument = trpc.useMutation(["documents.edit"]);
  const { isLoading } = trpc.useQuery(
    ["documents.findMany", { filter: filterParam }],
    {
      enabled: enableGet,
      onSuccess: (documents) => {
        setDocuments(documents);
        setEnableGet(false);
        setLoading(false);
      },
    }
  );

  return {
    loading,
    documents,
    add: async (document: DocumentInput) => {
      return await createDocument.mutateAsync(document);
    },

    edit: async (document: DocumentEdit) => {
      return await editDocument.mutateAsync(document);
    },

    getAssets: async (filter?: string) => {
      setFilterParam(filter ?? "");
      setEnableGet(true);
      setLoading(true);

      if (!isLoading) {
        return documents;
      }
    },
  };
}
