export interface Education {
  degree : string,
  institution : string,
  year : string,
  score : string
}

export interface Experience {
  company : string,
  position : string,
  duration : string,
  description : string
}

export interface FormData {
  firstName : string,
  lastName : string,
  email : string,
  phone : string,
  alternatePhone : string,
  city : string,
  dateOfBirth : string,
  gender : 'male' | 'female' | 'other' | '',
  about : string,
  photo : File | null,
  resume : File | null

  // Education 
  education : Education[]

  // skills
  skills : string[]

  // work experience 
  experiences : Experience[]

  // job experience 

  preferredRole : string,
  preferredLocation : string,
  expectedSallary : string,
  noticePeriod : string
}

export interface Step {
  id : number,
  label : string
}