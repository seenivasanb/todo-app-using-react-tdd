import DeleteIcon from "../../icons/delete";
import EditIcon from "../../icons/edit";

export type ButtonComponentType = {
  handleClick?: () => void;
  icon: "edit" | "remove";
};

const ButtonComponent = ({ handleClick, icon }: ButtonComponentType) => {
  const buttonClassName =
    icon === "edit"
      ? "text-cyan-500 hover:text-cyan-700"
      : "ml-2 text-red-500 hover:text-red-700";
  return (
    <button onClick={handleClick} className={buttonClassName}>
      {icon === "edit" ? <EditIcon /> : <DeleteIcon />}
    </button>
  );
};

export default ButtonComponent;