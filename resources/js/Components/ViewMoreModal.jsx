import React from "react";

const ViewMoreModal = ({show, onClose, children}) => {
    if (!show) {
        return null;
    }

    return (
        <div className="fixed z-50 inset-0 bg-gray-600 bg-opacity-30 flex justify-center items-center">
            <div className="bg-white rounded-lg shadow-lg w-fit">
                <div className="flex justify-end p-2 px-4 pb-0">
                    <button onClick={onClose} className="text-gray-500 hover:text-gray-900 text-2xl font-light">&times;</button>
                </div>
                <div className="w-full">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default ViewMoreModal;
