interface ChipButtonProps {
  children: React.ReactNode;
  action?: () => void;
  isClicked?: boolean;
}

export const FilterButton = ({ children, isClicked = false, action }: ChipButtonProps) => {
  const unclikedStyle = 'border-white bg-blue-950 text-white';
  const clickedStyle = 'border-blue-950 bg-white text-blue-950';
  return (
    <button
      className={`px-2 mx-2 w-auto border rounded-md ${isClicked ? clickedStyle : unclikedStyle} hover:bg-cyan-900 cursor-pointer lg:w-full`}
      onClick={action}
    >
      {children}
    </button>
  );
};
