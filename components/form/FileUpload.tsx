import { Upload } from "lucide-react";

interface FileUploadProps {
  onFileSelect : (file: File) => void,
  accept: string;
  label: string;
}


const FileUploadButton : React.FC<FileUploadProps> = ({ onFileSelect, accept, label })=>{
    return (
      <label className="flex-1 bg-blue-950 text-white rounded-lg p-4 flex items-center justify-center cursor-pointer hover:bg-blue-900 transition">
        <Upload className="w-5 h-5 mr-2"/>
        <span>{label}</span>
        <input 
          type="file" 
          className="hidden" 
          accept={accept}
          onChange={(e) => e.target.files?.[0] && onFileSelect(e.target.files[0])}
        />

      </label>
    )
}

export default FileUploadButton;