import Button from "../ui/Button";

interface FormNavigationProps {
  currentStep: number;
  totalSteps: number;
  onBack: () => void;
  onNext: () => void;
  onSubmit: () => void;
}

 const FormNavigation: React.FC<FormNavigationProps> = ({
  currentStep,
  totalSteps,
  onBack,
  onNext,
  onSubmit
}) => {
  return (
    <div className="flex gap-4">
      <Button
        type="button"
        variant="secondary"
        onClick={onBack}
        disabled={currentStep === 1}
        className="flex-1"
      >
        Back
      </Button>
      <Button
        type="button"
        variant="primary"
        onClick={currentStep === totalSteps ? onSubmit : onNext}
        className="flex-1"
      >
        {currentStep === totalSteps ? 'Submit' : 'Next'}
      </Button>
    </div>
  );
};

export default FormNavigation;