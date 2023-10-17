import dynamic from "next/dynamic";
import { useRef } from "react";
import "react-quill/dist/quill.snow.css"; 

const ReactQuill = dynamic(() => import("react-quill"), {
  ssr: false,
});

interface QuillEditorProps {
  value: string;
  name: string;
  onChange: (value: string) => void;
  label: string;
}

const QuillEditor: React.FC<QuillEditorProps> = ({ value, name, onChange, label }) => {
  
  const handleChange = (html: string) => {
    onChange(html);
  };

  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <ReactQuill theme="snow" value={value} onChange={handleChange} />
    </div>
  );
};

export default QuillEditor;
