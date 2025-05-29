import { TaskFragment } from '../gql/graphql';

interface TaskListProps {
  tasks: TaskFragment[];
}

export const TaskList = ({ tasks }: TaskListProps) => {
  return (
    <div className="w-[50%]">
      {tasks &&
        tasks.map((task: TaskFragment) => (
          <div className="border" key={task.id}>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <p>Status: {task.completed ? 'Completed' : 'Pending'}</p>
          </div>
        ))}
    </div>
  );
};
