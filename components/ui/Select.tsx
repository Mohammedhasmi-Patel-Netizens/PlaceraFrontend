interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  className?: string;
}


 const Select: React.FC<SelectProps> = ({ className = '', children, ...props }) => {
  return (
    <select
      className={`border border-gray-300 rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-orange-500 text-gray-500 transition ${className}`}
      {...props}
    >
      {children}
    </select>
  );
};

export default Select;