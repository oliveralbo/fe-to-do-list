import { TaskFragment } from '../gql/graphql';
import { Task } from './Task';

interface TaskListProps {
  tasks: TaskFragment[];
}

export const TaskList = ({ tasks }: TaskListProps) => {
  return (
    <div className="w-full lg:w-[75%]">
      {tasks && tasks.map((task: TaskFragment) => <Task task={task} />)}
    </div>
  );
};
