import { SectionList } from "@/components/Sections/SectionList";
import { Filter, FilterForm } from "@/components/UI";
import Loading from "@/components/UI/Loading";
import { useErrorContext } from "@/context/error.context";
import { trpc } from "@/utils/trpc";
import { Button } from "@material-tailwind/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { BiAddToQueue } from "react-icons/bi";

export default function SectionsPage() {
  const [filter, setFilter] = useState("");
  const [enableQuery, setEnableQuery] = useState(false);
  const { setError } = useErrorContext();

  const router = useRouter();

  const {
    data: sections,
    isLoading,
    error,
  } = trpc.useQuery(["sections.findMany", { filter }], {
    enabled: enableQuery,
    onError: (error) => setError(error.message),
    onSuccess: (data) => {
      setEnableQuery(false);
    },
  });

  useEffect(() => {
    setEnableQuery(true);
  }, []);

  function onFilter(filter: FilterForm) {
    setFilter(filter.filter);
    setEnableQuery(true);
  }

  return (
    <div className="p-2">
      {isLoading && <Loading />}
      <div className="flex justify-between space-x-2">
        <Filter onSubmit={onFilter} />
        <Button
          onClick={() => {
            router.push("/assets/new");
          }}
          className="p-2 space-x-1 flex items-center whitespace-nowrap"
          color="green"
        >
          <BiAddToQueue className="text-2xl" />
          <span>Nova Seção</span>
        </Button>
      </div>
      <div className="mt-2">
        {sections && <SectionList sections={sections} />}
      </div>
    </div>
  );
}
