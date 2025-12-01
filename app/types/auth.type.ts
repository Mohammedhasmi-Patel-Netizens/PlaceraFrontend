export type UserType = 'student' | 'employer';

export interface LoginFormData {
  email : string,
  password : string,
  userType : UserType,
  rememberme : boolean
}

export interface SignUpFormData {
  userType : UserType,
  email : string,
  password : string,
  confirmPassword : string,

  firstName? : string,
  lastName? : string,
  phone? : string,

  companyName?:string,
  companyWebsite?:string,
  companySize ?: string,
  designation?:string,
  contactNumber?:string

  agreeToTerms : boolean
}


export const COMPANY_SIZES = [
  { value: '1-10', label: '1-10 employees' },
  { value: '11-50', label: '11-50 employees' },
  { value: '51-200', label: '51-200 employees' },
  { value: '201-500', label: '201-500 employees' },
  { value: '501-1000', label: '501-1000 employees' },
  { value: '1000+', label: '1000+ employees' }
];