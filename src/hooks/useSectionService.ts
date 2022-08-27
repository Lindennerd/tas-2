import { SectionInput, SectionEdit } from "./../schemas/section.schema";
import { trpc } from "@/utils/trpc";
import useOnError from "./useOnError";

enum TRPC {
  delete = "sections.delete",
  create = "sections.create",
  update = "sections.update",
  findFirst = "sections.findFirst",
  findMany = "sections.findMany",
  findAllOptionals = "sections.findAllOptionals",
}

export default function useSectionService() {
  const { onError } = useOnError();

  const sectionDelete = trpc.useMutation([TRPC.delete], {
    onError,
  });

  const sectionCreate = trpc.useMutation([TRPC.create], { onError });
  const sectionEdit = trpc.useMutation([TRPC.update], { onError });

  function findFirst(sectionId: string, opts?: any) {
    return trpc.useQuery([TRPC.findFirst, sectionId], {
      ...opts,
      onError,
    });
  }

  function findMany(filter: string, page: number, opts?: any) {
    return trpc.useQuery([TRPC.findMany, { filter, page }], {
      ...opts,
      onError,
    });
  }

  function findAllOptionals(opts?: any) {
    return trpc.useQuery(["sections.findAllOptionals"], { ...opts, onError });
  }

  async function remove(sectionId: string) {
    return await sectionDelete.mutateAsync(sectionId);
  }

  async function create(section: SectionInput) {
    return await sectionCreate.mutateAsync(section);
  }

  async function edit(section: SectionEdit) {
    return await sectionEdit.mutateAsync(section);
  }

  return {
    findFirst,
    findAllOptionals,
    findMany,
    remove,
    create,
    edit,
  };
}
