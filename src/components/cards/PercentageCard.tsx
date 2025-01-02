interface Props {
  percentage: string;
  typePercentage: number;
  className?: string;
}

export const PercentageCard = ({
  percentage,
  typePercentage,
  className = "",
}: Props) => {
  return (
    <div
      className={`p-0.5 rounded-lg flex flex-row items-center ${
        typePercentage === 0
          ? `bg-red-50 border-2 border-red-400`
          : `bg-green-50 border-2 border-green-400`
      } ${className}`}
    >
      <svg
        className={`w-4 h-4 ${
          typePercentage === 0 ? `text-red-400` : `text-green-400`
        }`}
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 6v13m0-13 4 4m-4-4-4 4"
        />
      </svg>

      <p
        className={`text-xs ${
          typePercentage === 0 ? `text-red-400` : `text-green-400`
        }`}
      >
        {percentage}
      </p>
    </div>
  );
};
