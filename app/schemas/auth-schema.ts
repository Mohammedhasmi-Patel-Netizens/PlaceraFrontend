import * as yup from 'yup'

const emailValidation = yup
                        .string()
                        .email('Please enter a valid email address')
                        .required('The email is required');


const passwordValidation = yup
  .string()
  .min(8, 'Password must be at least 8 characters')
  .required('Password is required');


const phoneValidation = yup
                          .string()
                          .matches(/^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]*$/, 'Please enter a valid phone number')
                          .min(10, 'Phone number must be at least 10 digits')
                          .required('Phone number is required');
export const loginSchema = yup.object().shape({
  email: emailValidation,
  password: yup.string().required('Password is required'),
  userType: yup.string().oneOf(['student', 'employer']).required('User type is required'),
  rememberMe: yup.boolean()
});


// ============================================================================
// YUP VALIDATION SCHEMAS
// ============================================================================
// schemas/auth.schema.ts




// Signup validation schema - Student/Employee
export const signupStudentSchema = yup.object().shape({
  userType: yup.string().oneOf(['student']).required(),
  firstName: yup
    .string()
    .min(2, 'First name must be at least 2 characters')
    .max(50, 'First name must not exceed 50 characters')
    .matches(/^[a-zA-Z\s]+$/, 'First name can only contain letters')
    .required('First name is required'),
  lastName: yup
    .string()
    .min(2, 'Last name must be at least 2 characters')
    .max(50, 'Last name must not exceed 50 characters')
    .matches(/^[a-zA-Z\s]+$/, 'Last name can only contain letters')
    .required('Last name is required'),
  phone: phoneValidation,
  email: emailValidation,
  password: passwordValidation,
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Passwords must match')
    .required('Please confirm your password'),
  agreeToTerms: yup
    .boolean()
    .oneOf([true], 'You must agree to the terms and conditions')
    .required('You must agree to the terms and conditions')
});

export const signupEmployerSchema = yup.object().shape({
  userType: yup.string().oneOf(['employer']).required(),
  companyName: yup
    .string()
    .min(2, 'Company name must be at least 2 characters')
    .max(100, 'Company name must not exceed 100 characters')
    .required('Company name is required'),
  companyWebsite: yup
    .string()
    .url('Please enter a valid URL (e.g., https://example.com)')
    .nullable()
    .transform((value) => (value === '' ? null : value)),
  companySize: yup.string().nullable(),
  designation: yup
    .string()
    .min(2, 'Designation must be at least 2 characters')
    .max(50, 'Designation must not exceed 50 characters')
    .required('Designation is required'),
  contactNumber: phoneValidation,
  email: emailValidation,
  password: passwordValidation,
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Passwords must match')
    .required('Please confirm your password'),
  agreeToTerms: yup
    .boolean()
    .oneOf([true], 'You must agree to the terms and conditions')
    .required('You must agree to the terms and conditions')
});


export const personalInfoSchema = yup.object().shape({
  firstName: yup
    .string()
    .min(2, 'First name must be at least 2 characters')
    .matches(/^[a-zA-Z\s]+$/, 'First name can only contain letters')
    .required('First name is required'),
  lastName: yup
    .string()
    .min(2, 'Last name must be at least 2 characters')
    .matches(/^[a-zA-Z\s]+$/, 'Last name can only contain letters')
    .required('Last name is required'),
  email: emailValidation,
  phone: phoneValidation,
  alternatePhone: yup
    .string()
    .matches(/^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]*$/, 'Please enter a valid phone number')
    .nullable()
    .transform((value) => (value === '' ? null : value)),
  city: yup.string().required('City is required'),
  dateOfBirth: yup
    .date()
    .max(new Date(), 'Date of birth cannot be in the future')
    .test('age', 'You must be at least 16 years old', function(value) {
      if (!value) return false;
      const cutoff = new Date();
      cutoff.setFullYear(cutoff.getFullYear() - 16);
      return value <= cutoff;
    })
    .required('Date of birth is required'),
  gender: yup.string().oneOf(['male', 'female'], 'Please select a gender').required('Gender is required'),
  about: yup
    .string()
    .min(50, 'About me must be at least 50 characters')
    .max(500, 'About me must not exceed 500 characters')
    .required('About me is required')
});


export const educationSchema = yup.object().shape({
  education: yup.array().of(
    yup.object().shape({
      degree: yup.string().required('Degree is required'),
      institution: yup.string().required('Institution name is required'),
      year: yup
        .string()
        .matches(/^(19|20)\d{2}$/, 'Please enter a valid year')
        .test('year-range', 'Year must be between 1950 and current year', function(value) {
          if (!value) return false;
          const year = parseInt(value);
          const currentYear = new Date().getFullYear();
          return year >= 1950 && year <= currentYear;
        })
        .required('Year is required'),
      score: yup.string().required('Score/Grade is required')
    })
  ).min(1, 'At least one education entry is required')
});

export const skillsSchema = yup.object().shape({
  skills: yup
    .array()
    .of(yup.string())
    .min(3, 'Please add at least 3 skills')
    .max(20, 'Maximum 20 skills allowed')
});


export const workExperienceSchema = yup.object().shape({
  experiences: yup.array().of(
    yup.object().shape({
      company: yup.string().required('Company name is required'),
      position: yup.string().required('Position is required'),
      duration: yup.string().required('Duration is required'),
      description: yup
        .string()
        .min(50, 'Description must be at least 50 characters')
        .required('Description is required')
    })
  ).min(1, 'At least one work experience is required')
});


export const jobPreferencesSchema = yup.object().shape({
  preferredRole: yup.string().required('Preferred role is required'),
  preferredLocation: yup.string().required('Preferred location is required'),
  expectedSalary: yup
    .string()
    .matches(/^\d+(\.\d{1,2})?$/, 'Please enter a valid salary amount')
    .required('Expected salary is required'),
  noticePeriod: yup.string().required('Notice period is required')
});