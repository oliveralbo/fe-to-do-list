import { useState } from 'react';
import { FilterState, FilterContext } from '../../contexts/FilterContext';
import { MenuBar } from '../Task/MenuBar';
import { TaskList } from '../Task/TaskList';

export const Home = () => {
  const [filter, setFilter] = useState<FilterState>(FilterState.ALL);
  const [search, setSearch] = useState<string>('');
  return (
    <div className="w-[100%] flex flex-col items-center">
      <h1 className="text-5xl mb-6">Lista de Tareas</h1>
      <FilterContext value={{ filter, setFilter, search, setSearch }}>
        <MenuBar />
        <TaskList />
      </FilterContext>
    </div>
  );
};
