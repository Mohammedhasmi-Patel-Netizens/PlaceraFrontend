"use client";


import { INITIAL_SIGNUP_DATA } from "@/app/constants/auth/auth-form.constants";
import { signupEmployerSchema, signupStudentSchema } from "@/app/schemas/auth-schema";
import { COMPANY_SIZES, SignUpFormData } from "@/app/types/auth.type";
import { AuthButton } from "@/components/auth/AuthButton";
import { AuthInput } from "@/components/auth/AuthInput";
import { AuthSelect } from "@/components/auth/AuthSelect";
import Checkbox from "@/components/auth/Checkbox";
import PasswordInput from "@/components/auth/PasswordInput";
import { UserTypeSelector } from "@/components/auth/UserTypeSelector";
import { useFormValidation } from "@/hooks/useFormValidation";
import { Briefcase, Building2, Globe, Mail, Phone, User } from "lucide-react";
import { useEffect, useState } from "react";


interface SignupProps {
  onSwitchToLogin: () => void;
}

 const Signup: React.FC<SignupProps> = ({ onSwitchToLogin }) => {
  const [formData, setFormData] = useState<SignUpFormData>(INITIAL_SIGNUP_DATA);
  const [loading, setLoading] = useState(false);
  
  // Dynamically select schema based on user type
  const schema = formData.userType === 'student' ? signupStudentSchema : signupEmployerSchema;
  const { errors, validateField, validateForm, clearError, clearAllErrors } = useFormValidation<SignUpFormData>(schema);

  // Clear errors when user type changes
  useEffect(() => {
    clearAllErrors();
  }, [formData.userType, clearAllErrors]);

  const handleChange = (field: keyof SignUpFormData, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    clearError(field);
  };

  const handleBlur = async (field: keyof SignUpFormData) => {
    await validateField(field, formData[field]);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const isValid = await validateForm(formData);
    if (!isValid) {
      return;
    }

    setLoading(true);
    
    setTimeout(() => {
      console.log('Signup data:', formData);
      alert(`Account created successfully as ${formData.userType}!`);
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="flex justify-center items-center ">
    <div className="w-full max-w-md m-5">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Create Account</h2>
        <p className="text-gray-600">Join Placera today and get started</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5" noValidate>
        <UserTypeSelector
          selected={formData.userType}
          onChange={(type) => handleChange('userType', type)}
        />

        {formData.userType === 'student' && (
          <>
            <div className="grid grid-cols-2 gap-4">
              <AuthInput
                type="text"
                label="First Name"
                placeholder="John"
                icon={<User className="w-5 h-5" />}
                value={formData.firstName}
                onChange={(e) => handleChange('firstName', e.target.value)}
                onBlur={() => handleBlur('firstName')}
                error={errors.firstName}
                required
              />
              <AuthInput
                type="text"
                label="Last Name"
                placeholder="Doe"
                icon={<User className="w-5 h-5" />}
                value={formData.lastName}
                onChange={(e) => handleChange('lastName', e.target.value)}
                onBlur={() => handleBlur('lastName')}
                error={errors.lastName}
                required
              />
            </div>

            <AuthInput
              type="tel"
              label="Phone Number"
              placeholder="+91 98765 43210"
              icon={<Phone className="w-5 h-5" />}
              value={formData.phone}
              onChange={(e) => handleChange('phone', e.target.value)}
              onBlur={() => handleBlur('phone')}
              error={errors.phone}
              required
            />
          </>
        )}

        {formData.userType === 'employer' && (
          <>
            <AuthInput
              type="text"
              label="Company Name"
              placeholder="Tech Corp Inc."
              icon={<Building2 className="w-5 h-5" />}
              value={formData.companyName}
              onChange={(e) => handleChange('companyName', e.target.value)}
              onBlur={() => handleBlur('companyName')}
              error={errors.companyName}
              required
            />

            <AuthInput
              type="url"
              label="Company Website (Optional)"
              placeholder="https://example.com"
              icon={<Globe className="w-5 h-5" />}
              value={formData.companyWebsite}
              onChange={(e) => handleChange('companyWebsite', e.target.value)}
              onBlur={() => handleBlur('companyWebsite')}
              error={errors.companyWebsite}
            />

            <AuthSelect
              label="Company Size"
              options={[{ value: '', label: 'Select company size' }, ...COMPANY_SIZES]}
              value={formData.companySize}
              onChange={(e) => handleChange('companySize', e.target.value)}
            />

            <AuthInput
              type="text"
              label="Your Designation"
              placeholder="HR Manager"
              icon={<Briefcase className="w-5 h-5" />}
              value={formData.designation}
              onChange={(e) => handleChange('designation', e.target.value)}
              onBlur={() => handleBlur('designation')}
              error={errors.designation}
              required
            />

            <AuthInput
              type="tel"
              label="Contact Number"
              placeholder="+91 98765 43210"
              icon={<Phone className="w-5 h-5" />}
              value={formData.contactNumber}
              onChange={(e) => handleChange('contactNumber', e.target.value)}
              onBlur={() => handleBlur('contactNumber')}
              error={errors.contactNumber}
              required
            />
          </>
        )}

        <AuthInput
          type="email"
          label="Email Address"
          placeholder="name@example.com"
          icon={<Mail className="w-5 h-5" />}
          value={formData.email}
          onChange={(e) => handleChange('email', e.target.value)}
          onBlur={() => handleBlur('email')}
          error={errors.email}
          required
        />

        <PasswordInput
          label="Password"
          placeholder="Minimum 8 characters"
          value={formData.password}
          onChange={(e) => handleChange('password', e.target.value)}
          onBlur={() => handleBlur('password')}
          error={errors.password}
          required
        />

        <PasswordInput
          label="Confirm Password"
          placeholder="Re-enter password"
          value={formData.confirmPassword}
          onChange={(e) => handleChange('confirmPassword', e.target.value)}
          onBlur={() => handleBlur('confirmPassword')}
          error={errors.confirmPassword}
          required
        />

        <div>
          <Checkbox
            label={
              <span>
                I agree to the{' '}
                <a href="#" className="text-orange-500 hover:text-orange-600 font-medium">
                  Terms & Conditions
                </a>{' '}
                and{' '}
                <a href="#" className="text-orange-500 hover:text-orange-600 font-medium">
                  Privacy Policy
                </a>
              </span>
            }
            checked={formData.agreeToTerms}
            onChange={(e) => handleChange('agreeToTerms', e.target.checked)}
          />
          {errors.agreeToTerms && (
            <p className="text-red-500 text-xs mt-1">{errors.agreeToTerms}</p>
          )}
        </div>

        <AuthButton type="submit" variant="primary" fullWidth loading={loading}>
          Create Account
        </AuthButton>

        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-4 bg-white text-gray-500">or sign up with</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <AuthButton type="button" variant="outline" fullWidth>
            <img src="https://www.google.com/favicon.ico" alt="Google" className="w-5 h-5" />
            Google
          </AuthButton>
          <AuthButton type="button" variant="outline" fullWidth>
            <img src="https://www.linkedin.com/favicon.ico" alt="LinkedIn" className="w-5 h-5" />
            LinkedIn
          </AuthButton>
        </div>

        <p className="text-center text-gray-600 text-sm mt-6">
          Already have an account?{' '}
          <button
            type="button"
            onClick={onSwitchToLogin}
            className="text-orange-500 hover:text-orange-600 font-semibold transition-colors"
          >
            Sign In
          </button>
        </p>
      </form>
    </div>
    </div>
  );
};

export default Signup;