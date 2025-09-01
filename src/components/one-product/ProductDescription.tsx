import { EditorContent, useEditor, type JSONContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import type { Json } from "../../supabase/supabase";

interface Props {
    content: JSONContent | Json;
}

export const ProductDescription = ({content}:Props) => {

    const editor = useEditor({
        extensions: [StarterKit],
        content: content as JSONContent,
        editable: false,
        editorProps: {
            attributes: {
                class:'prose prose-sm sm:prose-base max-w-none',
            }
        }
    });

  return (
    <div>
        <h2 className="text-2xl font-bold text-center mb-8 underline">
            Descripción
        </h2>
        <EditorContent editor={editor} />
    </div>
  )
}
