const ClearIcon = ({ onClick }: { onClick?: () => void }) => (
    <button
        onClick={onClick}
        className="absolute inset-y-0 right-2 flex items-center text-gray-500 hover:text-gray-700 focus:outline-none"
    >
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            viewBox="0 0 20 20"
            fill="currentColor"
        >
            <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm-2.293-9.707a1 1 0 011.414 0L10 9.586l.879-.879a1 1 0 111.414 1.414L11.414 11l.879.879a1 1 0 01-1.414 1.414L10 12.414l-.879.879a1 1 0 01-1.414-1.414L8.586 11l-.879-.879a1 1 0 010-1.414z"
                clipRule="evenodd"
            />
        </svg>
    </button>
);
export default ClearIcon;
