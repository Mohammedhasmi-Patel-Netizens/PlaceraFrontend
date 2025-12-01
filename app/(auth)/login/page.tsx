
"use client";


import { INITIAL_LOGIN_DATA } from "@/app/constants/auth/auth-form.constants";
import { loginSchema } from "@/app/schemas/auth-schema";
import { LoginFormData } from "@/app/types/auth.type";
import { AuthButton } from "@/components/auth/AuthButton";
import { AuthInput } from "@/components/auth/AuthInput";
import Checkbox from "@/components/auth/Checkbox";
import PasswordInput from "@/components/auth/PasswordInput";
import { UserTypeSelector } from "@/components/auth/UserTypeSelector";
import { useFormValidation } from "@/hooks/useFormValidation";
import { Mail } from "lucide-react";
import { useState } from "react";


interface LoginProps {
  onSwitchToSignup: () => void;
}

 const Login: React.FC<LoginProps> = ({ onSwitchToSignup }) => {
  const [formData, setFormData] = useState<LoginFormData>(INITIAL_LOGIN_DATA);
  const [loading, setLoading] = useState(false);
  const { errors, validateField, validateForm, clearError } = useFormValidation<LoginFormData>(loginSchema);

  const handleChange = (field: keyof LoginFormData, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    clearError(field);
  };

  const handleBlur = async (field: keyof LoginFormData) => {
    await validateField(field, formData[field]);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const isValid = await validateForm(formData);
    if (!isValid) {
      return;
    }

    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log('Login data:', formData);
      alert(`Login successful as ${formData.userType}!`);
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="w-full max-w-md">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Welcome Back!</h2>
        <p className="text-gray-600">Sign in to continue to Placera</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6" noValidate>
        <UserTypeSelector
          selected={formData.userType}
          onChange={(type) => handleChange('userType', type)}
        />

        <AuthInput
          type="email"
          label="Email Address"
          placeholder="Enter your email"
          icon={<Mail className="w-5 h-5" />}
          value={formData.email}
          onChange={(e) => handleChange('email', e.target.value)}
          onBlur={() => handleBlur('email')}
          error={errors.email}
          required
        />

        <PasswordInput
          label="Password"
          placeholder="Enter your password"
          value={formData.password}
          onChange={(e) => handleChange('password', e.target.value)}
          onBlur={() => handleBlur('password')}
          error={errors.password}
          required
        />

        <div className="flex items-center justify-between">
          <Checkbox
            label="Remember me"
            checked={formData.rememberme}
            onChange={(e) => handleChange('rememberme', e.target.checked)}
          />
          <button
            type="button"
            className="text-sm text-orange-500 hover:text-orange-600 font-medium transition-colors"
          >
            Forgot Password?
          </button>
        </div>

        <AuthButton type="submit" variant="primary" fullWidth loading={loading}>
          Sign In
        </AuthButton>

        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-4 bg-white text-gray-500">or continue with</span>
          </div>
        </div>

      
        <p className="text-center text-gray-600 text-sm mt-6">
          Dont have an account?{' '}
          <button
            type="button"
            onClick={onSwitchToSignup}
            className="text-orange-500 hover:text-orange-600 font-semibold transition-colors"
          >
            Sign Up
          </button>
        </p>
      </form>
    </div>
  );
};

export default Login;