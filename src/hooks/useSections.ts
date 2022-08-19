import { useErrorContext } from "@/context/error.context";
import { useState } from "react";
import { Section, SectionInput, SectionEdit } from "../schemas/section.schema";
import { trpc } from "../utils/trpc";

export function useSections() {
  const { setError } = useErrorContext();

  const [enableGet, setEnableGet] = useState(false);
  const [filterParam, setFilterParam] = useState<string>("");
  const [sections, setSections] = useState<Section[]>([]);
  const [loading, setLoading] = useState(false);

  const createSection = trpc.useMutation(["sections.create"], {
    onError: (error) => {
      setError(error.message);
    },
  });
  const editSection = trpc.useMutation(["sections.update"], {
    onError: (error) => {
      setError(error.message);
    },
  });
  const { isLoading } = trpc.useQuery(
    ["sections.findMany", { filter: filterParam }],
    {
      enabled: enableGet,
      onSuccess: (sections) => {
        setSections(sections);
        setEnableGet(false);
        setLoading(false);
      },
      onError: (error) => {
        setError(error.message);
      },
    }
  );

  return {
    loading,
    sections,
    add: async (section: SectionInput) => {
      return await createSection.mutateAsync(section);
    },

    edit: async (section: SectionEdit) => {
      return await editSection.mutateAsync(section);
    },

    get: async (filter?: string) => {
      setFilterParam(filter ?? "");
      setEnableGet(true);
      setLoading(true);

      if (!isLoading) {
        return sections;
      }
    },
  };
}
