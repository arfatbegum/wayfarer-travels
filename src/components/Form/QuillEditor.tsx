'use client'

import dynamic from "next/dynamic";
import { useFormContext, Controller } from "react-hook-form";
import "react-quill/dist/quill.snow.css";

const ReactQuill = dynamic(() => import("react-quill"), {
  ssr: false,
});

interface QuillEditorProps {
  name: string; 
  label: string;
}

const QuillEditor: React.FC<QuillEditorProps> = ({ name, label }) => {
  const { control } = useFormContext();

  return (
    <div>
      {label ? label : null}
      <Controller
        name={name}
        control={control}
        render={({ field }) => ( 
          <ReactQuill
            theme="snow"
            value={field.value} 
            defaultValue={field.value} 
            onChange={field.onChange} 
          />
        )}
      />
    </div>
  );
};

export default QuillEditor;
