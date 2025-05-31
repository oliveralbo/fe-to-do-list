import { useContext } from 'react';
import { Button } from '../Ui/Button';
import { FilterState, TaskContext } from '../../contexts/TaskContext';

export const MenuBar = () => {
  const { setFilter } = useContext(TaskContext);
  return (
    <div className="border w-full rounded-lg border-black bg-blue-900 flex justify-evenly mb-4">
      <div className="border flex justify-around">
        <label>search</label>
        <input type="text" />
      </div>
      <div className="border flex justify-around">
        <button onClick={() => setFilter(FilterState.ALL)}>todos</button>
        <button onClick={() => setFilter(FilterState.COMPLETED)}>completos</button>
        <button onClick={() => setFilter(FilterState.PENDING)}>pendientes</button>
      </div>
      <div>
        <Button>Nueva tarea</Button>
      </div>
    </div>
  );
};
