import { Button, Input } from "@material-tailwind/react";
import { useForm } from "react-hook-form";
import { Asset, AssetEdit, AssetInput } from "../../schemas/asset.schema";
import Loading from "../UI/Loading";
import { ToastContainer, toast } from "react-toastify";
import { trpc } from "@/utils/trpc";
import { useErrorContext } from "@/context/error.context";

interface IAssetFormProps {
  asset?: AssetEdit;
  setAsset?: (asset: Asset) => void;
}

export function AssetForm({ asset, setAsset }: IAssetFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AssetInput>({
    defaultValues: { ...asset, url: asset?.url ?? "" },
  });

  const { setError } = useErrorContext();

  const createAsset = trpc.useMutation(["assets.create"], {
    onError: (error) => {
      setError(error.message);
    },
  });
  const editAsset = trpc.useMutation(["assets.edit"], {
    onError: (error) => {
      setError(error.message);
    },
  });

  async function onSubmit(data: AssetInput) {
    let mutated: Asset;

    if (asset) {
      mutated = await editAsset.mutateAsync({ id: asset.id, ...data });
    } else {
      mutated = await createAsset.mutateAsync(data);
    }

    if (setAsset) setAsset(mutated);

    toast.success("Ativo salvo com sucesso!");
  }

  return (
    <>
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

        <Button type="submit" variant="filled">
          Salvar
        </Button>
      </form>
      <ToastContainer />
    </>
  );
}
