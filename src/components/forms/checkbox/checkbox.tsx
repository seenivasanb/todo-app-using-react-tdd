import TickIcon from "../../icons/tick";

type CheckboxComponentProps = {
  isCompleted: boolean;
  handleStatusChange?: () => void;
};

const CheckboxComponent = ({
  isCompleted,
  handleStatusChange,
}: CheckboxComponentProps) => {
  return (
    <>
      <label className="cursor-pointer">
        <input
          className="hidden peer/completed"
          type="checkbox"
          defaultChecked={isCompleted}
          onChange={handleStatusChange}
        />
        <div
          className="w-5 h-5 mr-3 border-2 border-teal-400 text-white 
          peer-checked/completed:bg-teal-400 
          grid place-items-center"
          data-testid="icon"
        >
          <TickIcon />
        </div>
      </label>
    </>
  );
};

export default CheckboxComponent;
