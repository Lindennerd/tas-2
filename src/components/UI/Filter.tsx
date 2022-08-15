import { Button, FormControl, FormLabel, Input } from "@vechaiui/react";
import { useForm } from "react-hook-form";
import { BiSearch } from "react-icons/bi";

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
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl>
          <Input.Group>
            <Input {...register("filter")} placeholder="Filtre aqui" />
            <Input.RightElement className="w-16">
              <Button type="submit" size="xs" variant="solid">
                <BiSearch className="text-lg" />
              </Button>
            </Input.RightElement>
          </Input.Group>
        </FormControl>
      </form>
    </div>
  );
}
