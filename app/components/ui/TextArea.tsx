

interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    className?: string;
}

const TextArea : React.FC<TextAreaProps> = ({ className = '', ...props }) => {
    return (
       <textarea
        className={`border border-gray-300 rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-orange-500 resize-none transition ${className}`}
        {...props}
      />
    )
}

export default TextArea;