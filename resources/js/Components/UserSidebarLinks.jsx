import React from "react";
import { Link } from "@inertiajs/react";
import { usePage } from "@inertiajs/react";

const UserSidebarLinks = () => {
    const { url } = usePage();
    return (
        <ul className="text-white text-sm space-y-2 font-medium">
            <li>
                <Link
                    href={route('user.dashboard')}
                    className={`flex items-center p-2 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group ${url.startsWith('/u/dashboard') ? 'bg-gray-100 text-[#003049]' : 'hover:text-[#003049] dark:text-gray-400'}`}
                >
                    <svg className="w-5 h-5 transition duration-75 dark:text-gray-400 group-hover:text-[#003049] dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                        <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z"/>
                        <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z"/>
                    </svg>
                    <span className="ms-3">Dashboard</span>
                </Link>
            </li>
            <li>
                <Link
                    href={route('user.artworks')}
                    className={`flex items-center p-2 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group ${url.startsWith('/u/artworks') ? 'bg-gray-100 text-[#003049]' : 'hover:text-[#003049] dark:text-gray-400'}`}
                >
                    <svg className="w-5 h-5 transition duration-75 dark:text-gray-400 group-hover:text-[#003049] dark:group-hover:text-white" viewBox="0 0 22 21" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 7h10v10H2V7zm8 8V9H4v6h6zm12-8h-8v2h8V7zm-8 4h8v2h-8v-2zm8 4h-8v2h8v-2z" />
                    </svg>
                    <span className="ms-3">Artworks</span>
                </Link>
            </li>
            <li>
            <Link
                    href={route('user.materials')}
                    className={`flex items-center p-2 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group ${url.startsWith('/u/materials') ? 'bg-gray-100 text-[#003049]' : 'hover:text-[#003049] dark:text-gray-400'}`}
                >
                    <svg className="w-5 h-5 transition duration-75 dark:text-gray-400 group-hover:text-[#003049] dark:group-hover:text-white" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.75024 2C5.33603 2 5.00024 2.33579 5.00024 2.75V14.2505C5.00024 15.4932 6.0076 16.5005 7.25024 16.5005H9.5V19.5C9.5 20.8807 10.6193 22 12 22C13.3807 22 14.5 20.8807 14.5 19.5V16.5005H16.7502C17.9929 16.5005 19.0002 15.4932 19.0002 14.2505V2.75C19.0002 2.33579 18.6645 2 18.2502 2H5.75024ZM6.50024 11.0003V3.5H12.5V5.25154C12.5 5.66576 12.8358 6.00154 13.25 6.00154C13.6642 6.00154 14 5.66576 14 5.25154V3.5H15V6.25112C15 6.66534 15.3358 7.00112 15.75 7.00112C16.1642 7.00112 16.5 6.66534 16.5 6.25112V3.5H17.5002V11.0003H6.50024ZM6.50024 14.2505V12.5003H17.5002V14.2505C17.5002 14.6647 17.1645 15.0005 16.7502 15.0005H13.75C13.3358 15.0005 13 15.3363 13 15.7505V19.5C13 20.0523 12.5523 20.5 12 20.5C11.4477 20.5 11 20.0523 11 19.5V15.7505C11 15.3363 10.6642 15.0005 10.25 15.0005H7.25024C6.83603 15.0005 6.50024 14.6647 6.50024 14.2505Z" />
                    </svg>
                    <span className="ms-3">Art Materials</span>
                </Link>
            </li>
        </ul>
    )
}

export default UserSidebarLinks;

