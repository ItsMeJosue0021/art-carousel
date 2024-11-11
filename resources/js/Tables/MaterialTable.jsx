import React from "react";

const MaterialTable = ({materials, isLoading, handleSelectedMaterial}) => {

    const passMaterial = (material) => {
        handleSelectedMaterial(material);
    }


    if (isLoading) {
        return (
            <div className="w-full min-h-96 flex items-center justify-center">
                <svg
                    className="animate-spin h-12 w-12 mr-3 text-blue-800"
                    fill="none"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                    ></circle>
                    <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.963 7.963 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                </svg>
            </div>
        );
    }

    if (materials.length === 0) {
        return (
            <div className="w-full h-96 flex items-center justify-center">
                <p>No artwoks available.</p>
            </div>
        )
    }

    return (
        <div className="relative overflow-x-auto shadow sm:rounded-md bg-white p-5">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Title
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Description
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Category
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Price
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Quantity
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Ststus
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {materials.map((material) => (
                        <tr key={material.id} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {material.name}
                            </th>
                            <td className="px-6 py-4">
                                {material.description}
                            </td>
                            <td className="px-6 py-4">
                                {material.categoryName}
                            </td>
                            <td className="px-6 py-4">
                                {material.price}
                            </td>
                            <td className="px-6 py-4">
                                {material.quantity}
                            </td>
                            <td className="px-6 py-4">
                                {material.productStatusName}
                            </td>

                            {material.productStatusId == 3 ? (
                                <td className="px-6 py-4 flex items-center gap-4">
                                    <a onClick={() => passMaterial(material)} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">View</a>
                                </td>
                            ) : material.productStatusId == 2 ? (
                                <td className="px-6 py-4 flex items-center gap-4">
                                    <a onClick={() => passMaterial(material)} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                    <a className="font-medium text-red-600 dark:text-red-500 hover:underline">Delete</a>
                                </td>
                            ) : (
                                <td className="px-6 py-4 flex items-center gap-4">
                                    <a onClick={() => passMaterial(material)} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">View</a>
                                    <a className="font-medium text-red-600 dark:text-red-500 hover:underline">Delete</a>
                                </td>
                            )}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default MaterialTable;
