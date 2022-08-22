import { useErrorContext } from "@/context/error.context";
import { Option } from "@/schemas/option.schema";
import { trpc } from "@/utils/trpc";
import { Button } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { BiTrash } from "react-icons/bi";
import { VscLoading } from "react-icons/vsc";

interface OptionsListProps {
  options?: Option[];
  onRemoveOption?: () => void;
}

export function OptionsList({ options, onRemoveOption }: OptionsListProps) {
  const { setError } = useErrorContext();
  const [isLoading, setIsLoading] = useState(false);
  const removeOptionMutation = trpc.useMutation(["options.delete"], {
    onError: (error) => setError(error.message),
    onSuccess: () => setIsLoading(false),
  });

  async function removeOption(option: Option) {
    setIsLoading(true);
    await removeOptionMutation.mutateAsync({ id: option.id });
    onRemoveOption && onRemoveOption();
  }

  return (
    <div>
      {options &&
        options.map((option, index) => {
          return (
            <div key={index} className="flex justify-between p-2 border-b">
              <div className="space-x-4">
                <span>{option.description}</span>
              </div>
              <Button
                variant="outlined"
                size="sm"
                color="red"
                className="rounded-full p-1"
                onClick={() => removeOption(option)}
                disabled={isLoading}
              >
                {isLoading ? (
                  <VscLoading className="text-lg" />
                ) : (
                  <BiTrash className="text-lg" />
                )}
              </Button>
            </div>
          );
        })}
    </div>
  );
}
