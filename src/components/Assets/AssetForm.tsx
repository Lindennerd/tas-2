import { Button, Input } from "@material-tailwind/react";
import { useForm } from "react-hook-form";
import { useAssetContext } from "../../context/asset.context";
import { AssetInput } from "../../schemas/asset.schema";
import Loading from "../UI/Loading";

export function AssetForm() {
  const context = useAssetContext();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AssetInput>({
    defaultValues: { ...context.asset, url: context.asset?.url ?? "" },
  });

  async function onSubmit(data: AssetInput) {
    await context.mutate({ ...data });
  }

  return (
    <>
      {context.isLoading && <Loading />}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <Input label="Nome" {...register("name", { required: true })} />
          {errors.name && errors.name.type === "required" && (
            <span>O nome é obrigatório</span>
          )}
        </div>
        <div>
          <Input
            label="Descrição"
            {...register("description", { required: true })}
          />
          {errors.description && errors.description.type === "required" && (
            <span>A descrição é obrigatória</span>
          )}
        </div>
        <div>
          <Input
            label="Endereço (URL, servidor etc...)"
            {...register("url", { required: false })}
          />
        </div>

      <Button type="submit" variant="solid" color="primary">
        Salvar
      </Button>
    </form>
  );
}
