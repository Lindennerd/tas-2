import { Option } from "@/schemas/option.schema";
import { QuestionType } from "@/schemas/question.schema";
import {
  Button,
  Input,
  Tab,
  TabPanel,
  Tabs,
  TabsBody,
  TabsHeader,
  Textarea,
} from "@material-tailwind/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FileFormChoiceForm } from "../Options/FileChoiceForm";
import { MultipleChoiceForm } from "../Options/MultipleChoiceForm";
import { OptionsList } from "../Options/OptionsList";
import { FormError } from "../UI/FormError";

export type QuestionForm = {
  weight: number;
  description: string;
  help: string;
  type: string;
};

export function QuestionForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<QuestionForm>();

  const [type, setType] = useState<QuestionType>(QuestionType.text);
  const [options, setOptions] = useState<Option[]>([]);

  function onSubmit(data: QuestionForm) {
    console.log(data);
  }

  return (
    <div className="w-full space-y-2">
      <Tabs value={"info"}>
        <TabsHeader>
          <Tab value="info">Informações Básicas</Tab>
          {type ===
            Object.keys(QuestionType)[
              Object.values(QuestionType).indexOf(QuestionType.multipleChoice)
            ] && <Tab value="multipleChoice">Opções</Tab>}
          {type ===
            Object.keys(QuestionType)[
              Object.values(QuestionType).indexOf(QuestionType.file)
            ] && <Tab value="file">Arquivo</Tab>}
        </TabsHeader>
        <TabsBody>
          <TabPanel value="info">
            <form className="space-y-2" onSubmit={handleSubmit(onSubmit)}>
              <Input
                {...register("weight", { required: true })}
                label="Peso"
                type="number"
                max={10}
                min={1}
                className="min-w-20"
              />
              {errors.weight && errors.weight.type === "required" && (
                <FormError>Peso é obrigatório</FormError>
              )}
              <Textarea
                {...register("description", { required: true })}
                label="Descrição"
              />
              {errors.description && errors.description.type === "required" && (
                <FormError>A descrição da questão é obrigatória</FormError>
              )}
              <Textarea {...register("help")} label="Texto de Apoio" />
              <select
                {...register("type", {
                  required: true,
                  onChange: (e) => {
                    setType(e.target.value);
                  },
                })}
                className="form-select appearance-none
      block
      w-full
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding bg-no-repeat
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                aria-label="Tipo de Questão"
              >
                {Object.values(QuestionType).map((type) => (
                  <option
                    key={type}
                    value={
                      Object.keys(QuestionType)[
                        Object.values(QuestionType).indexOf(type)
                      ]
                    }
                  >
                    {type}
                  </option>
                ))}
              </select>
              {errors.type && errors.type.type === "required" && (
                <FormError>O Tipo da questão é obrigatório</FormError>
              )}
            </form>
          </TabPanel>
          <TabPanel value="multipleChoice">
            <MultipleChoiceForm
              addOption={(option) => {
                setOptions((curr) => [...curr, option]);
              }}
            />
            <OptionsList
              options={options}
              removeOption={(option) =>
                setOptions((curr) => {
                  return curr.filter((currOption) => currOption !== option);
                })
              }
            />
          </TabPanel>
          <TabPanel value="file">
            <FileFormChoiceForm />
          </TabPanel>
        </TabsBody>
      </Tabs>
    </div>
  );
}
