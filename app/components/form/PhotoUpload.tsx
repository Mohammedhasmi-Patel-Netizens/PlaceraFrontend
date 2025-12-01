import { Upload } from "lucide-react";
import Image from "next/image";

interface PhotoUploadProps {
  photo : File | null;
  onPhotoSelect : (file: File) => void
}

const PhotoUpload : React.FC<PhotoUploadProps> = ({ photo, onPhotoSelect }) => {
    return (
      <div className="flex justify-center mb-6">
        <label className="relative cursor-pointer group">
          <div className="w-24 h-24 rounded-full border-4 border-gray-200 flex items-center justify-center overflow-hidden bg-gray-50 group-hover:border-blue-950 transition">
            {
              photo ? (
                  <Image src={URL.createObjectURL(photo)} height={50} width={100} alt="Profile" className="w-full h-full object-cover" /> 
              ) : (
                  <Upload className="w-8 h-8 text-gray-400" />
              )}
          </div>
          <div className="absolute bottom-0 right-0 bg-blue-950 rounded-full p-2 group-hover:bg-blue-900 transition">
              <Upload className="w-4 h-4 text-white" />
          </div>

          <input
            type="file" 
            className="hidden" 
            accept="image/*"
            onChange={(e) => e.target.files?.[0] && onPhotoSelect(e.target.files[0])}
          />
        </label>
      </div>
    )
}

export default PhotoUpload;