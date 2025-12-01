import { FormData } from "@/app/types/form.type";
import Input from "../../ui/Input";

interface SkillsProps {
  formData: FormData;
  onInputChange: (field: string, value: any) => void;
}

const Skills: React.FC<SkillsProps> = ({ formData, onInputChange }) => {
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      const value = e.currentTarget.value.trim();
      if (value && !formData.skills.includes(value)) {
        onInputChange('skills', [...formData.skills, value]);
        e.currentTarget.value = '';
      }
    }
  };

  const removeSkill = (index: number) => {
    onInputChange('skills', formData.skills.filter((_, i) => i !== index));
  };

  return (
    <div className="space-y-4">
      <p className="text-gray-600 mb-4">Add your key skills (Press Enter to add)</p>
      <Input
        type="text"
        placeholder="Enter a skill and press Enter"
        onKeyPress={handleKeyPress}
      />
      <div className="flex flex-wrap gap-2 mt-4 min-h-[100px]">
        {formData.skills.map((skill, idx) => (
          <span
            key={idx}
            className="bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 h-fit"
          >
            {skill}
            <button
              type="button"
              onClick={() => removeSkill(idx)}
              className="hover:text-orange-800 font-bold"
            >
              ×
            </button>
          </span>
        ))}
      </div>
    </div>
  );
};

export default Skills;