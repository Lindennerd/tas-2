import { QuestionOutput } from "@/schemas/question.schema";

interface Props {
  question: QuestionOutput;
}

export function ManifestQuestionFile(props: Props) {
  return (
    <div>
      <label
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        htmlFor="file_input"
      >
        Upload file
      </label>
      <input
        className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
        id="file_input"
        type="file"
      />
    </div>
  );
}
