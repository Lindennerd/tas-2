import { Button, Input } from "@material-tailwind/react";
import { useForm } from "react-hook-form";
import { AssetOutput, AssetEdit, AssetInput } from "../../schemas/asset.schema";
import { ToastContainer, toast } from "react-toastify";
import { trpc } from "@/utils/trpc";
import { useErrorContext } from "@/context/error.context";
import { useEffect } from "react";

interface IAssetFormProps {
  asset?: AssetEdit | null;
  setAsset?: (asset: AssetOutput) => void;
}

export function AssetForm({ asset, setAsset }: IAssetFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<AssetInput>();

  const { setError } = useErrorContext();

  const createAsset = trpc.useMutation(["assets.createWithManifest"], {
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
    let mutated: AssetOutput;

    if (asset) {
      mutated = await editAsset.mutateAsync({ id: asset.id, ...data });
    } else {
      mutated = await createAsset.mutateAsync(data);
    }

    if (setAsset) setAsset(mutated);

    toast.success("Ativo salvo com sucesso!");
  }

  useEffect(() => {
    if (asset) {
      setValue("name", asset.name);
      setValue("description", asset?.description);
      setValue("url", asset.url);
    }
  }, [asset]);

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
          <p className="text-sm text-gray-500 mt-2">Campo opcional</p>
        </div>
        <div className="flex justify-end">
          <Button type="submit" variant="filled" color="green">
            Salvar
          </Button>
        </div>
      </form>
      <ToastContainer />
    </>
  );
}
