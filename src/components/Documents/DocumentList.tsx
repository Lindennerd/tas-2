import { Button } from "@material-tailwind/react";
import { BiAddToQueue } from "react-icons/bi";
import { Filter, FilterForm } from "../UI";

export function DocumentList() {
  function onSubmit(data: FilterForm) {
    //context.getAssets(data.filter);
  }

  return (
    <div className="p-2">
      <div className="flex justify-between space-x-2">
        <Filter onSubmit={onSubmit} />
        <Button
          onClick={() => {
            //router.push("/assets/new");
          }}
          className="p-2 space-x-1 flex items-center whitespace-nowrap"
          color="green"
        >
          <BiAddToQueue className="text-2xl" />
          <span>Novo Document</span>
        </Button>
      </div>
      <div>Documentos</div>
    </div>
  );
}
