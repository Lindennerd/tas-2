import { useUnsavedChangesContext } from "@/context/manifest.changes.context";
import { QuestionOutput } from "@/schemas/question.schema";

interface Props {
  question: QuestionOutput;
}

export function ManifestQuestionFile(props: Props) {
  const changesContext = useUnsavedChangesContext();

  function getBase64(file: File | undefined | null) {
    if (!file) return;

    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      return reader.result;
    };
    reader.onerror = function (error) {
      console.log("Error: ", error);
      return "";
    };
  }

  return (
    <div>
      <label
        htmlFor="formFile"
        className="form-label inline-block mb-2 text-gray-700"
      >
        Escolha um arquivo
        {props.question?.Extensions.map((ext) => ext.description).join(",")}
      </label>
      <input
        className="form-control
    block
    w-full
    px-3
    py-1.5
    text-base
    font-normal
    text-gray-700
    bg-white bg-clip-padding
    border border-solid border-gray-300
    rounded
    transition
    ease-in-out
    m-0
    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
        type="file"
        id="formFile"
        onChange={(e) => {
          changesContext.mutateAnswer({
            questionId: props.question!.id,
            value: getBase64(e.target.files && e.target.files[0]),
          });
        }}
      />
    </div>
  );
}
