import { useForm } from "react-hook-form";
import { BiFilter, BiSearch } from "react-icons/bi";
import { Input, IconButton, Button } from "@material-tailwind/react";

export type FilterForm = {
  filter: string;
};

interface FilterProps {
  onSubmit: (form: FilterForm) => void;
}

export function Filter(props: FilterProps) {
  const { register, handleSubmit } = useForm<FilterForm>();
  function onSubmit(data: FilterForm) {
    props.onSubmit(data);
  }

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit(onSubmit)} className="flex space-x-1">
        <Input label="Filtre aqui" {...register("filter")} />
        <Button variant="outlined" className="p-2" type="submit">
          <BiSearch className="text-lg" />
        </Button>
      </form>
    </div>
  );
}
