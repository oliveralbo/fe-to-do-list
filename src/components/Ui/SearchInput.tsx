import { ChangeEvent } from 'react';

interface SearchInputProps {
  setSearch: (x: string) => void;
}

export const SearchInput = ({ setSearch }: SearchInputProps) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target?.value);
  };
  return (
    <div className="flex  items-start">
      <input
        placeholder="Buscar Tarea 🔍"
        name="task"
        onChange={(e) => handleChange(e)}
        type="text"
        className="border border-stone-500 rounded-2xl px-2 bg-white"
      ></input>
    </div>
  );
};
