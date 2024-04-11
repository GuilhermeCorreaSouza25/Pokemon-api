import React from 'react';

const Pagination = (props) => {
  const { page, totalPages, onLeftClick, onRightClick } = props;
  return (
    <div className="flex justify-end pb-1">
      <button
        onClick={onLeftClick}
        className="bg-white hover:bg-gray-400 text-gray-900 font-bold py-4 px-6 rounded-l text-lg"
      >
        Prev
      </button>
      <div className="bg-white hover:bg-gray-400 text-gray-900 font-bold py-4 px-6 text-lg">
        {page} de {totalPages}
      </div>
      <button
        onClick={onRightClick}
        className="bg-white hover:bg-gray-400 text-gray-900 font-bold py-4 px-6 rounded-r text-lg"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
