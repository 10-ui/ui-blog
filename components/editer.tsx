"use client";
import React from "react";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import "@/styles/editer.css";

const Editor = () => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: "<p data-placeholder='new line'>Hello World!</p>",
    editorProps: {
      attributes: {
        class: "prose prose-base focus:outline-none text-left w-full",
        placeholder: "Start writing...",
      },
    },
  });

  if (!editor) {
    return null;
  }

  return (
    <div className="mx-auto mt-10 w-1/2 rounded-lg shadow-xl">
      <div className="p-4">
        <EditorContent editor={editor} />
      </div>
    </div>
  );
};

export default Editor;
