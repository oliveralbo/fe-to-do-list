import { TaskList } from './TaskList';

export const Home = () => {
  return (
    <div className="w-[100%] flex flex-col items-center">
      <h1 className="text-3xl mb-6">Lista de Tareas</h1>
      {/* <div className="border w-[100%] my-4">MenuBar</div> */}
      <TaskList />
    </div>
  );
};
