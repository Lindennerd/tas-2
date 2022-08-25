import type { NextPage } from "next";
import { AssetList } from "@/components/Assets";
import { useState } from "react";
import { useErrorContext } from "@/context/error.context";
import { useRouter } from "next/router";
import { trpc } from "@/utils/trpc";
import { Filter, FilterForm, Paper } from "@/components/UI";
import { Button } from "@material-tailwind/react";
import { BiAddToQueue } from "react-icons/bi";
import Loading from "@/components/UI/Loading";
import Pagination from "@/components/UI/Pagination";

const Home: NextPage = () => {
  const router = useRouter();
  const { setError } = useErrorContext();
  const [filter, setFilter] = useState("");
  const [page, setPage] = useState(0);

  const assetsQuery = trpc.useQuery(["assets.findMany", { filter, page }], {
    onError: (error) => {
      setError(error.message);
    },
  });

  function onFilter(data: FilterForm) {
    setFilter(data.filter);
    assetsQuery.refetch();
  }

  return (
    <div className="space-y-2">
      {assetsQuery.isLoading && <Loading />}
      <Paper>
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
            <span>Novo Ativo</span>
          </Button>
        </div>
      </Paper>
      <Paper>
        {assetsQuery.data && (
          <>
            <AssetList assets={assetsQuery.data} />
            <Pagination
              itensCount={assetsQuery.data?.length}
              next={() => setPage((curr) => curr + 1)}
              previous={() => setPage((curr) => curr - 1)}
              page={page}
            />
          </>
        )}
      </Paper>
    </div>
  );
};

export default Home;
