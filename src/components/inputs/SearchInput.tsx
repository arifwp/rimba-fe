interface Props {
  placeholder?: string;
  className?: string;
}

export const SearchInput = ({ placeholder = "Search", className }: Props) => {
  return (
    <div className={` relative ${className}`}>
      <input
        type="text"
        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
        placeholder={placeholder}
      />

      <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
        <svg
          className="w-6 h-6"
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
            strokeWidth="2"
            d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
          />
        </svg>
      </span>
    </div>
  );
};
