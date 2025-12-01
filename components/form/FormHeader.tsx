import { ChevronDown } from "lucide-react";
import Image from "next/image";

const FormHeader : React.FC = () => {

  return (
    <div className="flex justify-between items-center mb-8">
      <Image   src="/placera-logo.png"
 alt="Placera Logo" width={100} height={50}/>
      <div className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer hover:text-gray-800 transition">
        <span>English</span>
        <ChevronDown className="w-4 h-4" />
      </div>
    </div>
  )

}

export default FormHeader;