import ButtonComponent from "../forms/button/button";
import CheckboxComponent from "../forms/checkbox/checkbox";

export type TodoComponentProps = {
  id: number;
  task: string;
  isCompleted: boolean;
  handleStatusChange?: () => void;
  handleEdit?: () => void;
  handleRemove?: () => void;
};

const TodoComponent = ({
  task,
  isCompleted,
  handleStatusChange,
  handleEdit,
  handleRemove,
}: TodoComponentProps) => {
  return (
    <div className="flex mb-4 pb-4 items-center justify-between border-b">
      <CheckboxComponent
        isCompleted={isCompleted}
        handleStatusChange={handleStatusChange}
      />
      <p className="w-3/4">{task}</p>
      <ButtonComponent handleClick={handleEdit} icon="edit" />
      <ButtonComponent handleClick={handleRemove} icon="remove" />
    </div>
  );
};

export default TodoComponent;