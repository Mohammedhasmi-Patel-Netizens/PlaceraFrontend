import { Eye, EyeOff, Lock } from "lucide-react";
import { useState } from "react";

interface PasswordInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
  error?: string;
}

const PasswordInput : React.FC<PasswordInputProps> = ({label, error, className = '',  ...props }) => {
      const [showPassword,setShowPassword] = useState(false);

      return (
        <div className="w-full">
            {
            label && (
              <label  className="block text-sm font-medium text-gray-700 mb-2">{label}</label>
            )}

            <div className="relative">
              <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                  <Lock className="w-5 h-5"/>
              </div>

              <input
                type={showPassword ? 'text' : 'password'}
                className={`
                  border border-gray-300 rounded-lg px-4 py-3 w-full pl-10 pr-12
                  focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent
                  transition-all
                  ${error ? 'border-red-500' : ''}
                  ${className}
                `}
                {...props}
              />
               <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition"
                >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
            {error && (
                <p className="text-orange-500 text-xs mt-1">{error}</p>
              )}

              
        </div>
      );
} 

export default PasswordInput;