import { Building2, Users } from "lucide-react";

interface UserTypeSelectorProps {
  selected: UserType;
  onChange: (type: UserType) => void;
}

export const UserTypeSelector: React.FC<UserTypeSelectorProps> = ({ selected, onChange }) => {
  return (
    <div className="grid grid-cols-2 gap-4 mb-6">
      <button
        type="button"
        onClick={() => onChange('student')}
        className={`
          p-6 rounded-xl border-2 transition-all duration-200
          ${selected === 'student' 
            ? 'border-orange-500 bg-orange-50 shadow-lg shadow-orange-500/20' 
            : 'border-gray-200 hover:border-orange-300 hover:bg-orange-50/30'
          }
        `}
      >
        <Users className={`w-8 h-8 mx-auto mb-3 ${selected === 'student' ? 'text-orange-500' : 'text-gray-400'}`} />
        <p className={`font-semibold ${selected === 'student' ? 'text-orange-500' : 'text-gray-600'}`}>
          Student/Employee
        </p>
        <p className="text-xs text-gray-500 mt-1">Looking for opportunities</p>
      </button>

      <button
        type="button"
        onClick={() => onChange('employer')}
        className={`
          p-6 rounded-xl border-2 transition-all duration-200
          ${selected === 'employer' 
            ? 'border-orange-500 bg-orange-50 shadow-lg shadow-orange-500/20' 
            : 'border-gray-200 hover:border-orange-300 hover:bg-orange-50/30'
          }
        `}
      >
        <Building2 className={`w-8 h-8 mx-auto mb-3 ${selected === 'employer' ? 'text-orange-500' : 'text-gray-400'}`} />
        <p className={`font-semibold ${selected === 'employer' ? 'text-orange-500' : 'text-gray-600'}`}>
          Employer/Company
        </p>
        <p className="text-xs text-gray-500 mt-1">Hiring candidates</p>
      </button>
    </div>
  );
};