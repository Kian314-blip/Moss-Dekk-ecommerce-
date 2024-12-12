import { useState } from 'react';

interface CollapseProps {
  title: string;
  content: string;
}

const Collapse: React.FC<CollapseProps> = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-b border-gray-700">
      <div
        className="flex justify-between items-center p-4 cursor-pointer"
        onClick={handleToggle}
      >
        <h2 className="text-lg font-semibold">{title}</h2>
        <span>{isOpen ? '-' : '+'}</span>
      </div>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
        <div className="p-4">
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
};

export default Collapse;