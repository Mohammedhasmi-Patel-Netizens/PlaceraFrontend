import { FormData } from "@/app/types/form.type";
import Input from "../../ui/Input";
import { Education as EducationType } from "@/app/types/form.type";

interface EducationProps {
  formData: FormData;
  onInputChange: (field: string, value: any) => void;
}

export const Education: React.FC<EducationProps> = ({ formData, onInputChange }) => {
  const handleEducationChange = (index: number, field: keyof EducationType, value: string) => {
    const newEducation = [...formData.education];
    newEducation[index][field] = value;
    onInputChange('education', newEducation);
  };

  const addEducation = () => {
    onInputChange('education', [
      ...formData.education,
      { degree: '', institution: '', year: '', score: '' }
    ]);
  };

  const removeEducation = (index: number) => {
    if (formData.education.length > 1) {
      onInputChange('education', formData.education.filter((_, i) => i !== index));
    }
  };

  return (
    <div className="space-y-6">
      <p className="text-gray-600 mb-4">Add your educational background</p>
      {formData.education.map((edu, idx) => (
        <div key={idx} className="p-4 border border-gray-200 rounded-lg space-y-4 relative">
          {formData.education.length > 1 && (
            <button
              type="button"
              onClick={() => removeEducation(idx)}
              className="absolute top-2 right-2 text-orange-500 hover:text-orange-700 font-bold text-xl"
            >
              ×
            </button>
          )}
          <Input
            type="text"
            placeholder="Degree/Qualification"
            value={edu.degree}
            onChange={(e) => handleEducationChange(idx, 'degree', e.target.value)}
          />
          <Input
            type="text"
            placeholder="Institution Name"
            value={edu.institution}
            onChange={(e) => handleEducationChange(idx, 'institution', e.target.value)}
          />
          <div className="grid grid-cols-2 gap-4">
            <Input
              type="text"
              placeholder="Year of Completion"
              value={edu.year}
              onChange={(e) => handleEducationChange(idx, 'year', e.target.value)}
            />
            <Input
              type="text"
              placeholder="Score/Grade"
              value={edu.score}
              onChange={(e) => handleEducationChange(idx, 'score', e.target.value)}
            />
          </div>
        </div>
      ))}
      <button
        type="button"
        className="text-orange-500 font-medium hover:text-orange-600 transition"
        onClick={addEducation}
      >
        + Add Another Education
      </button>
    </div>
  );
};
