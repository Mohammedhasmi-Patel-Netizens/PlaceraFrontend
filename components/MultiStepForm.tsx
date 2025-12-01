"use client";

import { useState } from "react";
import { Education } from "./form/steps/Education";
import Skills from "./form/steps/Skills";
import WorkExperience from "./form/steps/WorkExperience";
import JobPreferences from "./form/steps/JobPreferences";
import FormNavigation from "./form/FormNavigation";
import DecorativeElements from "./layout/DecorativeElements";
import FormHeader from "./form/FormHeader";
import ProgressStepper from "./form/ProgressStepper";
import { INITIAL_FORM_DATA, STEPS } from "@/app/constants/form/form-step.constant";
import { FormData } from "@/app/types/form.type";
import { PersonalInformation } from "./form/steps/PersonalInformation";

function MultiStepForm(){
  const [currentStep,setCurrentStep] = useState(1);
  const [formData,setFormData] = useState<FormData>(INITIAL_FORM_DATA);

  const handleInputChange = (field:string,value:any)=> {
    setFormData((prev)=>({...prev,[field]: value}));
  }

  const handleFileUpload = (field: 'photo' | 'resume', file: File) => {
    setFormData(prev => ({ ...prev, [field]: file }));
  };

  const handleNext = ()=>{
    if(currentStep < STEPS.length){
      setCurrentStep((prev) => prev + 1);
    }
  }

  const handleBack = () => {

    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  }

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    alert('Form submitted successfully!');
  };

  const renderStep = () => {
    const stepProps = {
      formData,
      onInputChange: handleInputChange,
    };

    switch (currentStep) {
      case 1:
        return <PersonalInformation {...stepProps} onFileUpload={handleFileUpload} />;
      case 2:
        return <Education {...stepProps} />;
      case 3:
        return <Skills {...stepProps} />;
      case 4:
        return <WorkExperience {...stepProps} />;
      case 5:
        return <JobPreferences {...stepProps} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 via-blue-900 to-indigo-900 flex items-center justify-center p-8 relative overflow-hidden">
      <DecorativeElements />
      
      {/* Main form container - Fixed width at 50% */}
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-[50%] min-w-[600px] p-8 relative z-10">
        <FormHeader />
        
        <ProgressStepper steps={STEPS} currentStep={currentStep} />

        {/* Form Content with fixed height */}
        <div className="mb-8">
          <h2 className="text-xl text-red-400 text-center mb-6 font-medium">
            Lets get some more details about you!
          </h2>

          {/* Fixed height container for content */}
          <div className="min-h-[500px] overflow-y-auto px-2">
            {renderStep()}
          </div>
        </div>

        <FormNavigation
          currentStep={currentStep}
          totalSteps={STEPS.length}
          onBack={handleBack}
          onNext={handleNext}
          onSubmit={handleSubmit}
        />
      </div>
    </div>
  )
}

export default MultiStepForm;