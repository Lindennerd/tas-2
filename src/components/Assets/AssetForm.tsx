import { Button, Input } from "@material-tailwind/react";
import { useForm } from "react-hook-form";
import { useAssetContext } from "../../context/asset.context";
import { useAsset } from "../../hooks";
import { AssetInput } from "../../schemas/asset.schema";

export function AssetForm() {
  const { addAsset } = useAsset();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AssetInput>();

  async function onSubmit(data: AssetInput) {
    const newAsset = await addAsset({ ...data });
  }

  return (
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

      <Button type="submit" color="green">
        Salvar
      </Button>
    </form>
  );
}
