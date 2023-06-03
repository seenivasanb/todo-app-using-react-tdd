type TickIconType = {
    className?: string;
  };

const TickIcon = ({className = "w-4 h-4"}: TickIconType) => {
  return (
    <svg
    className={className}
    data-testid="tick-icon"
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4.5 12.75l6 6 9-13.5"
    ></path>
  </svg>
  )
}

export default TickIcon