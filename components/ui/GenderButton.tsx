interface GenderButtonProps {
  selected: boolean;
  onClick: () => void;
  children: React.ReactNode;
}

 const GenderButton: React.FC<GenderButtonProps> = ({ selected, onClick, children }) => {
  return (
    <button
      type="button"
      className={`border-2 rounded-lg px-4 py-3 font-medium transition ${
        selected
          ? 'border-orange-500 bg-orange-50 text-orange-500'
          : 'border-gray-300 text-gray-500 hover:border-orange-500'
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default GenderButton;