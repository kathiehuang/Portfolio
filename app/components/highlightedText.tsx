import { useEffect, useState } from 'react';

const HighlightedText = () => {
  const [highlighted, setHighlighted] = useState(false);

  useEffect(() => {
    const handleSelection = () => {
      const selection = window.getSelection();
      const isHighlighted = selection && selection.toString() !== '';

      setHighlighted(isHighlighted);
    };

    document.addEventListener('mouseup', handleSelection);

    return () => {
      document.removeEventListener('mouseup', handleSelection);
    };
  }, []);

  return (
    <p className={` ${highlighted ? 'text-black' : 'text-transparent'}`}>
      hey queen!
    </p>
  );
};

export default HighlightedText;
