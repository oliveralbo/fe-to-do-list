interface ButtonProps {
  children: React.ReactNode;
  action: () => void;
}

export const Button = ({ children, action }: ButtonProps) => {
  return (
    <button
      className="px-2 border rounded-xl border-black bg-stone-300 hover:bg-stone-500 cursor-pointer lg:w-full"
      onClick={action}
    >
      {children}
    </button>
  );
};
