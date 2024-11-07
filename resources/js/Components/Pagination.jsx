import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    const pages = [...Array(totalPages).keys()].map(num => num + 1);

    return (
        <div className="flex items-start gap-1 mt-2 ">
            <span className='text-sm p-1 px-3 border border-gray-200 bg-white rounded shadow-sm'>Pages</span>
            {pages.map(page => (
                <button
                    key={page}
                    onClick={() => onPageChange(page)}
                    className={`text-sm p-1 px-3 border border-gray-200 rounded shadow-sm hover:bg-blue-700 hover:text-white ${page === currentPage ? 'text-white bg-blue-700' : 'bg-white'}`}
                >
                    {page}
                </button>
            ))}
        </div>
    );
};

export default Pagination;
