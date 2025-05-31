import { useState } from 'react';
import { FilterState, TaskContext } from '../../contexts/TaskContext';
import { MenuBar } from '../Task/MenuBar';
import { TaskList } from '../Task/TaskList';

export const Home = () => {
  const [filter, setFilter] = useState<FilterState>(FilterState.ALL);
  return (
    <div className="w-[100%] flex flex-col items-center">
      <h1 className="text-3xl mb-6">Lista de Tareas</h1>
      <TaskContext value={{ filter, setFilter }}>
        <MenuBar />
        <TaskList />
      </TaskContext>
    </div>
  );
};
