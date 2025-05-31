import { createContext } from 'react';
import { TaskFragment } from '../gql/graphql';

export enum FilterState {
  PENDING = 'Pendiente',
  COMPLETED = 'Completa',
  ALL = 'All',
}

export interface TaskContextType {
  filter: FilterState;
  task?: TaskFragment | null;
  setFilter: (filter: FilterState) => void;
}

export const TaskContext = createContext<TaskContextType>({
  filter: FilterState.ALL,
  setFilter: () => {},
});
