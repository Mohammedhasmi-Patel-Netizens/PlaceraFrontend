
interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: React.ReactNode;
}

 const Checkbox: React.FC<CheckboxProps> = ({ label, className = '', ...props }) => {
  return (
    <label className="flex items-center gap-2 cursor-pointer group">
      <input
        type="checkbox"
        className={`
          w-5 h-5 rounded border-gray-300 text-orange-500 
          focus:ring-2 focus:ring-orange-500 focus:ring-offset-0
          cursor-pointer transition-all
          ${className}
        `}
        {...props}
      />
      <span className="text-sm text-gray-600 group-hover:text-gray-800 transition-colors">
        {label}
      </span>
    </label>
  );
};

export default Checkbox;