import { useMemo } from "react";

export type FilterButtonsProps = {
  activeButton?: "all" | "pending" | "done";
};

const FilterButtons = ({ activeButton = "all" }: FilterButtonsProps) => {
  const filterNames = useMemo(() => ["all", "pending", "done"], []);

  return (
    <div className="grid grid-flow-col justify-stretch">
      {filterNames.map((name) => (
        <button
          key={name}
          className={`${
            activeButton === name ? "active border-teal-500 text-teal-500" : ""
          }
             p-3 border-b-2 text-slate-400 font-semibold capitalize`}
        >
          {name}
        </button>
      ))}
    </div>
  );
};

export default FilterButtons;
