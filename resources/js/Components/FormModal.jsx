import React from "react";

const FormModal = ({show, onClose, children}) => {
    if (!show) {
        return null;
    }

    return (
        <div className="fixed z-50 inset-0 bg-gray-600 bg-opacity-30 flex justify-center items-center rounded-lg">
            <div className="bg-white rounded-lg shadow-lg w-fit p-4">
                <div className="flex justify-end p-2 px-4 pb-0 rounded-lg">
                    <button onClick={onClose} className="text-gray-500 hover:text-gray-900 text-2xl font-light">&times;</button>
                </div>
                <div className="w-full h-auto max-h-[600px] overflow-y-scroll rounded-lg">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default FormModal;
