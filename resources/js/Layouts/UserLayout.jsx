import React from "react";
import { usePage } from '@inertiajs/react';
import SideBar from "@/Components/SideBar";
import Dropdown from '@/Components/Dropdown';
import { ToastContainer } from 'react-toastify';

const UserLayout = ({children}) => {
    const user = usePage().props.auth.user;

    return (
        <div className="flex flex-col  min-h-screen">
            <SideBar />
            <div className="sm:ml-64 min-h-screen bg-gray-50">
                <div className="">
                    <header className="bg-[#003049] border-b border-gray-200 text-white">
                        <div className="flex items-center justify-end container mx-auto  flex-wrap p-5 flex-col md:flex-row">
                            <div className="hidden sm:ms-6 sm:flex sm:items-center">
                                <div className="relative ms-3">
                                    <Dropdown>
                                        <Dropdown.Trigger>
                                            <span className="inline-flex rounded-md">
                                                <button
                                                    type="button"
                                                    className="inline-flex items-center rounded border border-white bg-transparent px-3 py-2 text-sm font-medium leading-4 text-white transition duration-150 ease-in-out  focus:outline-none dark:bg-gray-800 dark:text-gray-400 dark:hover:text-gray-300"
                                                >
                                                    {user.name}

                                                    <svg
                                                        className="-me-0.5 ms-2 h-4 w-4"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 20 20"
                                                        fill="currentColor"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                            clipRule="evenodd"
                                                        />
                                                    </svg>
                                                </button>
                                            </span>
                                        </Dropdown.Trigger>

                                        <Dropdown.Content>
                                            <Dropdown.Link
                                                href={route('profile.edit')}
                                            >
                                                Profile
                                            </Dropdown.Link>
                                            <Dropdown.Link
                                                href={route('logout')}
                                                method="post"
                                                as="button"
                                            >
                                                Log Out
                                            </Dropdown.Link>
                                        </Dropdown.Content>
                                    </Dropdown>
                                </div>
                            </div>
                        </div>
                    </header>
                    {children}
                    <ToastContainer/>
                </div>
            </div>
        </div>
    )
}

export default UserLayout;
