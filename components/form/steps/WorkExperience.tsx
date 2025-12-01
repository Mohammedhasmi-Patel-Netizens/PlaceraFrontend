import { Experience, FormData } from "@/app/types/form.type";
import Input from "../../ui/Input";
import TextArea from "../../ui/TextArea";

interface WorkExperienceProps {
  formData : FormData;
    onInputChange: (field: string, value: any) => void;
}

 const WorkExperience: React.FC<WorkExperienceProps> = ({ formData, onInputChange }) => {
  const handleExperienceChange = (index: number, field: keyof Experience, value: string) => {
    const newExperiences = [...formData.experiences];
    newExperiences[index][field] = value;
    onInputChange('experiences', newExperiences);
  };

  const addExperience = () => {
    onInputChange('experiences', [
      ...formData.experiences,
      { company: '', position: '', duration: '', description: '' }
    ]);
  };

  const removeExperience = (index: number) => {
    if (formData.experiences.length > 1) {
      onInputChange('experiences', formData.experiences.filter((_, i) => i !== index));
    }
  };

  return (
    <div className="space-y-6">
      <p className="text-gray-600 mb-4">Add your work experience</p>
      {formData.experiences.map((exp, idx) => (
        <div key={idx} className="p-4 border border-gray-200 rounded-lg space-y-4 relative">
          {formData.experiences.length > 1 && (
            <button
              type="button"
              onClick={() => removeExperience(idx)}
              className="absolute top-2 right-2 text-red-500 hover:text-red-700 font-bold text-xl"
            >
              ×
            </button>
          )}
          <Input
            type="text"
            placeholder="Company Name"
            value={exp.company}
            onChange={(e) => handleExperienceChange(idx, 'company', e.target.value)}
          />
          <Input
            type="text"
            placeholder="Position/Role"
            value={exp.position}
            onChange={(e) => handleExperienceChange(idx, 'position', e.target.value)}
          />
          <Input
            type="text"
            placeholder="Duration (e.g., Jan 2020 - Dec 2022)"
            value={exp.duration}
            onChange={(e) => handleExperienceChange(idx, 'duration', e.target.value)}
          />
          <TextArea
            placeholder="Job Description"
            rows={3}
            value={exp.description}
            onChange={(e) => handleExperienceChange(idx, 'description', e.target.value)}
          />
        </div>
      ))}
      <button
        type="button"
        className="text-orange-500 font-medium hover:text-orange-600 transition"
        onClick={addExperience}
      >
        + Add Another Experience
      </button>
    </div>
  );
};

export default WorkExperience;