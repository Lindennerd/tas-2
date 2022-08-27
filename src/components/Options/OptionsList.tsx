import { useErrorContext } from "@/context/error.context";
import { useMultipleChoiceService } from "@/hooks/useMultipleChoiceService";
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
  const [isLoading, setIsLoading] = useState(false);
  const { remove } = useMultipleChoiceService();

  async function removeOption(option: Option) {
    setIsLoading(true);
    await remove(option.id);
    setIsLoading(false);
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
