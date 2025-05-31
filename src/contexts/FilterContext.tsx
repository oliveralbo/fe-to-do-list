import { createContext } from 'react';

export enum FilterState {
  PENDING = 'Pendiente',
  COMPLETED = 'Completa',
  ALL = 'All',
}

export interface FilterContextType {
  filter: FilterState;
  search: string;
  setSearch: (x: string) => void;
  setFilter: (filter: FilterState) => void;
}

export const FilterContext = createContext<FilterContextType>({
  filter: FilterState.ALL,
  search: '',
  setFilter: () => {},
  setSearch: () => {},
});
