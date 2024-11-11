import React from "react";
import { BASE_URL } from "@/config";

const ArtworkDetails = ({artwork}) => {
    return (
        <div className="w-auto min-w-[1000px] text-sm p-6 flex items-start gap-5">
            <div className="w-full flex flex-col gap-5">
                <div className="flex items-center">
                    <p>Name: </p>
                    <p>{artwork.name}</p>
                </div>

                <div className="flex items-center">
                    <p>Dsescription</p>
                    <p>{artwork.description}</p>
                </div>

                <div className="flex flex-col space-y-1">
                    <p>Price</p>
                    <p>{artwork.price}</p>
                </div>

                <div className="flex flex-col space-y-1">
                    <p>Category</p>
                    <p>{artwork.categoryName}</p>
                </div>
            </div>

            <div className="w-full flex items-center max-w-screen-sm mx-auto mb-3 space-y-4 sm:flex sm:space-y-0">
                <div className="relative w-full">
                    <div className="items-center justify-center max-w-xl mx-auto">
                        <div className="flex justify-center w-full h-[400px] px-4 transition bg-white hover:bg-gray-50 border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none" id="drop">
                        {artwork.image && (
                                <img src={`${BASE_URL}/${artwork.image}`} alt="Selected Image" className="rounded" />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ArtworkDetails;
