import { useErrorContext } from "@/context/error.context";
import { trpc } from "@/utils/trpc";
import { Button } from "@material-tailwind/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { BiAddToQueue } from "react-icons/bi";
import { Filter, FilterForm } from "../UI";
import Loading from "../UI/Loading";

export function AssetList() {
  const router = useRouter();
  const { setError } = useErrorContext();
  const [filter, setFilter] = useState("");
  const [enableQuery, setEnableQuery] = useState(false);

  const {
    data: assets,
    error,
    isLoading,
  } = trpc.useQuery(["assets.findMany", { filter }], {
    enabled: enableQuery,
    onSuccess: (assets) => {
      setEnableQuery(false);
    },
    onError: (error) => {
      setError(error.message);
    },
  });

  function onSubmit(data: FilterForm) {
    setFilter(data.filter);
    setEnableQuery(true);
  }

  useEffect(() => {
    setFilter("");
    setEnableQuery(true);
  }, []);

  return (
    <div className="p-2">
      {isLoading && <Loading />}
      <div className="flex justify-between space-x-2">
        <Filter onSubmit={onSubmit} />
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
      <div>
        {assets &&
          assets.map((asset) => (
            <div key={asset.id} className="flex justify-between space-x-2">
              {asset.name}
            </div>
          ))}
      </div>
    </div>
  );
}
