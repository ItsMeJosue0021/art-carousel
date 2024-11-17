import React from "react";
import { BASE_URL } from "@/config";

const ArtMaterialDetails = ({material}) => {
    return (
        <div className="w-auto min-w-[1000px] max-w-[1200px] text-sm p-8 pt-0 flex items-start gap-5">
            <div class="w-full mx-auto flex flex-wrap">
                {material.image ? (
                    <img src={`${BASE_URL}/${material.image}`} alt="Selected Image" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" />
                ) : (
                    <div className="lg:w-1/2 w-full lg:h-auto min-h-64 bg-gray-200 rounded flex items-center justify-center">
                        <span>No Image Available</span>
                    </div>
                )}
                <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                    <h2 class="text-sm title-font text-gray-500 tracking-widest">{material.categoryName}</h2>
                    <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">{material.name}</h1>
                    {material.productStatusName === 'For Sale' ? (
                        <h3 className="bg-green-100 text-green-500 px-2 py-1 rounded w-fit">{material.productStatusName}</h3>
                    ) : material.productStatusName === 'For Approval' ?  (
                        <h3 className="bg-blue-100 text-blue-500 px-2 py-1 rounded w-fit">{material.productStatusName}</h3>
                    ) : (
                        <h3 className="bg-red-100 text-red-500 px-2 py-1 rounded w-fit">{material.productStatusName}</h3>
                    )}
                    <p class="leading-relaxed">{material.description}</p>
                    <div class="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                    </div>
                    <div className="flex items-center justify-between">
                        <div class="flex">
                            <span class="title-font font-medium text-2xl text-gray-900">{material.price}</span>
                        </div>
                        {material.productStatusName === 'For Approval' && (
                            <div className="flex items-center gap-5">
                                <button class="flex ml-auto text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded">Approve</button>
                                <button class="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded">Decline</button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ArtMaterialDetails;






