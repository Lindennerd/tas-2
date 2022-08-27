import { trpc } from "@/utils/trpc";

export default function useQuerySection() {
  function querySection(sectionId: string, opts?: any) {
    return trpc.useQuery(["sections.findFirst", sectionId], opts ?? opts);
  }

  return {
    querySection,
  };
}
