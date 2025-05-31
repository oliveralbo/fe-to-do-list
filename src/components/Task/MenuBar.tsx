import { useContext, useState } from 'react';
import { Button } from '../Ui/Button';
import { FilterContext, FilterState } from '../../contexts/FilterContext';
import { useMutation, useQuery } from '@apollo/client';
import { CreateTaskDocument, GetTasksDocument } from '../../gql/graphql';
import { ConfirmationModal } from '../Ui/ConfirmationModal';
import { TaskForm } from './TaskForm';
import { FilterButton } from '../Ui/FilterButton';
import { SearchInput } from '../Ui/SearchInput';

const isClickedInitialValues = {
  [FilterState.ALL]: false,
  [FilterState.COMPLETED]: false,
  [FilterState.PENDING]: false,
};

export const MenuBar = () => {
  const { refetch } = useQuery(GetTasksDocument);
  const { setFilter, setSearch } = useContext(FilterContext);
  const [createTask] = useMutation(CreateTaskDocument);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [isClicked, setIsClicked] = useState(isClickedInitialValues);

  const handleCreateTask = async (formData: FormData) => {
    const title = formData.get('title') as string;
    const description = formData.get('description') as string;
    await createTask({ variables: { title, description } });
    await refetch();
    setShowModal(false);
  };

  const handleFilter = (buttonCliked: FilterState) => {
    setFilter(buttonCliked);
    setIsClicked({
      ...isClickedInitialValues,
      [buttonCliked]: true,
    });
  };

  return (
    <div className="border w-full py-4 rounded-lg border-black bg-blue-900 flex justify-evenly mb-4">
      <div>
        <SearchInput setSearch={setSearch} />
      </div>
      <div className="w-[30%] flex justify-around">
        <FilterButton
          isClicked={isClicked[FilterState.ALL]}
          action={() => handleFilter(FilterState.ALL)}
        >
          Todos
        </FilterButton>
        <FilterButton
          isClicked={isClicked[FilterState.COMPLETED]}
          action={() => handleFilter(FilterState.COMPLETED)}
        >
          Completos
        </FilterButton>
        <FilterButton
          isClicked={isClicked[FilterState.PENDING]}
          action={() => handleFilter(FilterState.PENDING)}
        >
          Pendientes
        </FilterButton>
      </div>
      <div className="w-[10%]">
        <Button action={() => setShowModal(true)}>Nueva tarea</Button>
      </div>
      <ConfirmationModal
        isOpen={!!showModal}
        children={<TaskForm onCancel={() => setShowModal(false)} onSubmit={handleCreateTask} />}
      />
    </div>
  );
};
