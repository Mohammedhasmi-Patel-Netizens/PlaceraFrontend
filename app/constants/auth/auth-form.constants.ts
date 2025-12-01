import { LoginFormData, SignUpFormData } from "@/app/types/auth.type";

export const INITIAL_LOGIN_DATA: LoginFormData = {
 email : "",
 password : "",
 userType : "student",
 rememberme : false

};

export const INITIAL_SIGNUP_DATA : SignUpFormData = {
  userType : 'student',
  email : '',
  password  : '',
  confirmPassword : '',
  firstName: '',
  lastName: '',
  phone: '',
  companyName: '',
  companyWebsite: '',
  companySize: '',
  designation: '',
  contactNumber: '',
  agreeToTerms: false
}