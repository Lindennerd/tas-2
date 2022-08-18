import { trpc } from "@/utils/trpc";
import { Document } from "../schemas/document.schema";
import { createContext, useContext, useState } from "react";

interface IDocumentContext {
  document: Document;
  isLoading: boolean;
  getDocument: (id: string) => void;
}

const DocumentContext = createContext<IDocumentContext | null>(null);

export const useDocumentContext = () => {
  const context = useContext(DocumentContext);
  if (!context) {
    throw new Error(
      "useDocumentContext must be used within an DocumentContextProvider"
    );
  }

  return context;
};

export function DocumentContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [document, setDocument] = useState<Document>({} as Document);
  const [enableGetDocument, setEnableGetDocument] = useState(true);
  const [idDocument, setIdDocument] = useState("");
  const { isLoading } = trpc.useQuery(
    ["documents.findFirst", { id: idDocument }],
    {
      enabled: enableGetDocument,
      onSuccess: (document: Document) => {
        setDocument(document);
        setEnableGetDocument(false);
      },
    }
  );

  function getDocument(id: string) {
    setIdDocument(id);
    setEnableGetDocument(true);
  }

  return (
    <DocumentContext.Provider value={{ document, isLoading, getDocument }}>
      {children}
    </DocumentContext.Provider>
  );
}
