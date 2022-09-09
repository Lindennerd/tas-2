import { Section } from "@/schemas/section.schema";
import { ManifestQuestion } from "./ManifestQuestion";
import { Comment } from "@/schemas/comment.schema";
import { Comments } from "../Comments/Comments";
import { useState } from "react";

interface ManifestSectionProps {
  section: Section;
  comments: Comment[] | undefined;
}

export function ManifestSection(props: ManifestSectionProps) {
  const [viewComments, setViewComments] = useState(false);

  return (
    <div className="rounded-md shadow-md mb-2">
      <div className="p-2 bg-blue-gray-50 space-x-2 rounded-t-md border-b">
        <span className="font-semibold">{props.section?.name}</span>
        <span className="text-gray-500">{props.section?.description}</span>
      </div>
      <div className="w-full">
        {props.section?.questions?.map((question) => (
          <div className="border-b-2" key={question.id}>
            <ManifestQuestion question={question} key={question.id} />
            {props.comments &&
              props.comments.some(
                (comm) => comm?.questionId == question.id
              ) && (
                <>
                  <button
                    onClick={(e) => setViewComments(!viewComments)}
                    className="p-1 text-center border hover:bg-gray-200 cursor-pointer w-full"
                  >
                    {viewComments ? "Esconder Comentários" : "Ver Comentários"}
                  </button>
                  <div className={viewComments ? "block" : "hidden"}>
                    <Comments
                      comments={props.comments.filter(
                        (comm) => comm?.questionId == question.id
                      )}
                    />
                  </div>
                </>
              )}
          </div>
        ))}
      </div>
    </div>
  );
}
