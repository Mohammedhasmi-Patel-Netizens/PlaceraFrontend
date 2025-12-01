import { FormData } from "@/app/types/form.type";
import Input from "../../ui/Input";
import Select from "../../ui/Select";

interface JobPreferencesProps {
  formData: FormData;
  onInputChange: (field: string, value: any) => void;
}

const JobPreferences: React.FC<JobPreferencesProps> = ({ formData, onInputChange }) => {
  return (
    <div className="space-y-4">
      <p className="text-gray-600 mb-4">Tell us about your job preferences</p>
      <Input
        type="text"
        placeholder="Preferred Role/Position"
        value={formData.preferredRole}
        onChange={(e) => onInputChange('preferredRole', e.target.value)}
      />
      <Input
        type="text"
        placeholder="Preferred Location"
        value={formData.preferredLocation}
        onChange={(e) => onInputChange('preferredLocation', e.target.value)}
      />
      <Input
        type="text"
        placeholder="Expected Salary"
        value={formData.expectedSallary}
        onChange={(e) => onInputChange('expectedSalary', e.target.value)}
      />
      <Select
        value={formData.noticePeriod}
        onChange={(e) => onInputChange('noticePeriod', e.target.value)}
      >
        <option value="">Notice Period</option>
        <option value="immediate">Immediate</option>
        <option value="15days">15 Days</option>
        <option value="1month">1 Month</option>
        <option value="2months">2 Months</option>
        <option value="3months">3 Months</option>
      </Select>
    </div>
  );
};

export default JobPreferences;