import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Textarea,
} from "@vechaiui/react";
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
      <FormControl>
        <FormLabel>Nome</FormLabel>
        <Input
          {...register("name", { required: true })}
          placeholder="Aqui vai o nome do ativo que você está cadastrando"
        />
        {errors.name && errors.name.type === "required" && (
          <FormErrorMessage>O nome é obrigatório</FormErrorMessage>
        )}
      </FormControl>
      <FormControl>
        <FormLabel>Descrição</FormLabel>
        <Textarea
          {...register("description", { required: true })}
          placeholder="Descreva brevemente o ativo"
        />
        {errors.description && errors.description.type === "required" && (
          <FormErrorMessage>
            É obrigatório prover uma descrição para o ativo
          </FormErrorMessage>
        )}
      </FormControl>
      <FormControl>
        <FormLabel>Endereço</FormLabel>
        <Input
          type="url"
          {...register("url")}
          placeholder="forneça a URL do ativo, caso exista"
        />
      </FormControl>

      <Button type="submit" variant="solid" color="primary">
        Salvar
      </Button>
    </form>
  );
}
