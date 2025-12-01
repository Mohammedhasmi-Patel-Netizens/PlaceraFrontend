import { Step } from "@/app/types/form.type";
import React from "react";

interface ProgressStepperProps {
  steps : Step[],
  currentStep : number
}

const ProgressStepper = ({steps,currentStep}) => {
  return (
    <div className="flex items-center justify-between mb-8 relative">
      {
          steps.map((step,index)=>(
            <React.Fragment key={step.id}>
              <div className="flex flex-col items-center relative z-10">
                 <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-all ${
                      currentStep >= step.id 
                        ? 'bg-orange-500 text-white' 
                        : 'bg-gray-200 text-gray-400'
                    }`}>
                      {currentStep > step.id ? '✓' : step.id}
                  </div>
                  <span className="text-xs mt-2 text-center max-w-[80px] leading-tight">
                        {step.label}
                  </span>
              </div>
              {index < steps.length - 1 && (
                <div 
                  className={`flex-1 h-1 mx-2 transition-all ${
                    currentStep > step.id ? 'bg-orange-500' : 'bg-gray-200'
                  }`} 
                  style={{ marginTop: '-20px' }} 
                />
              )}
            </React.Fragment>
          ))
      }
    </div>
  )
}

export default ProgressStepper