import { SectionList } from "@/components/Sections/SectionList";
import { Filter, FilterForm, Paper } from "@/components/UI";
import Loading from "@/components/UI/Loading";
import { useErrorContext } from "@/context/error.context";
import { trpc } from "@/utils/trpc";
import { Button } from "@material-tailwind/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { BiAddToQueue } from "react-icons/bi";

export default function SectionsPage() {
  const [filter, setFilter] = useState("");
  const [page, setPage] = useState(0);
  const { setError } = useErrorContext();

  const router = useRouter();

  const {
    data: sections,
    isLoading,
    error,
    refetch,
  } = trpc.useQuery(["sections.findMany", { filter, page }], {
    onError: (error) => setError(error.message),
  });

  function onFilter(filter: FilterForm) {
    setFilter(filter.filter);
    refetch();
  }

  function previousPage() {
    setPage((curr) => curr - 1);
    refetch();
  }

  function nextPage() {
    setPage((curr) => curr + 1);
    refetch();
  }

  return (
    <div className="p-2">
      {isLoading && <Loading />}
      <Paper>
        <div className="flex justify-between space-x-2">
          <Filter onSubmit={onFilter} />
          <Button
            onClick={() => {
              router.push("/sections/new");
            }}
            className="p-2 space-x-1 flex items-center whitespace-nowrap"
            color="green"
          >
            <BiAddToQueue className="text-2xl" />
            <span>Nova Seção</span>
          </Button>
        </div>
      </Paper>
      <div className="mt-2">
        <Paper>
          {sections && (
            <>
              <SectionList
                sections={sections}
                onMutateSections={() => refetch()}
              />
              <div className="flex gap-4 items-center justify-between">
                <Button
                  variant="outlined"
                  size="sm"
                  disabled={page <= 0}
                  onClick={() => previousPage()}
                >
                  Anterior
                </Button>
                <div>Página {page + 1}</div>
                <Button
                  variant="outlined"
                  size="sm"
                  onClick={() => nextPage()}
                  disabled={sections.length < 10}
                >
                  Próxima
                </Button>
              </div>
            </>
          )}
        </Paper>
      </div>
    </div>
  );
}
