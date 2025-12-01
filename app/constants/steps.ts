import { FormData, Step } from "../types/form.type";

export const STEPS : Step[] = [
  {id:1, label:"Personal Information"},
  {id:2, label:"Education"},
  {id:3, label:"Skills"},
  {id:4, label:"Work Experience"},
  {id:5, label:"Job Preferences"},

];

export const INITIAL_FORM_DATA : FormData = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    alternatePhone: '',
    city: '',
    dateOfBirth: '',
    gender: '',
    about: '',
    photo: null,
    resume: null,
    education: [{ degree: '', institution: '', year: '', score: '' }],
    skills: [],
    experiences: [{ company: '', position: '', duration: '', description: '' }],
    preferredRole: '',
    preferredLocation: '',
    expectedSallary: '',
    noticePeriod: ''
}