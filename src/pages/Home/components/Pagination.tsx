import React from "react";

const Pagination = ({ page, setPage }: any) => {
  const [numberOfPages, setNumberOfPages] = React.useState(Array(20).fill(0));
  return (
    <>
      <div className="flex items-center justify-between border-gray-200 bg-gray-700 px-4 py-3 sm:px-6 mx-auto w-full">
        <div className="inline-flex -space-x-px">
          {numberOfPages.map((_, index) => (
            <button
              key={index}
              onClick={() => setPage(index + 1)}
              className="py-2 px-3 ml-0 leading-tight text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default Pagination;
