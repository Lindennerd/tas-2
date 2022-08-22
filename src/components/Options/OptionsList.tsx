import { Option } from "@/schemas/option.schema";
import { Button } from "@material-tailwind/react";
import { useEffect } from "react";
import { BiTrash } from "react-icons/bi";

interface OptionsListProps {
  options?: Option[];
  removeOption: (option: Option) => void;
}

export function OptionsList({ options, removeOption }: OptionsListProps) {
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
              >
                <BiTrash className="text-lg" />
              </Button>
            </div>
          );
        })}
    </div>
  );
}
