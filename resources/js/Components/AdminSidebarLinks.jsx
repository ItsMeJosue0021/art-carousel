import React from "react";
import { Link } from "@inertiajs/react";
import { usePage } from "@inertiajs/react";

const AdminSidebarLinks = () => {
    const { url } = usePage();
    return (
        <ul className="text-white text-sm space-y-2 font-medium">
            <li>
                <Link
                    href={route('admin.dashboard')}
                    className={`flex items-center p-2 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group ${url.startsWith('/a/dashboard') ? 'bg-gray-100 text-[#003049]' : 'hover:text-[#003049] dark:text-gray-400'}`}
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
                    href={route('admin.artworks')}
                    className={`flex items-center p-2 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group ${url.startsWith('/a/artworks') ? 'bg-gray-100 text-[#003049]' : 'hover:text-[#003049] dark:text-gray-400'}`}
                >
                    <svg className="w-5 h-5 transition duration-75 dark:text-gray-400 group-hover:text-[#003049] dark:group-hover:text-white" viewBox="0 0 22 21" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 7h10v10H2V7zm8 8V9H4v6h6zm12-8h-8v2h8V7zm-8 4h8v2h-8v-2zm8 4h-8v2h8v-2z" />
                    </svg>
                    <span className="ms-3">Artworks</span>
                </Link>
            </li>
            <li>
                <Link
                    href={route('admin.materials')}
                    className={`flex items-center p-2 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group ${url.startsWith('/a/materials') ? 'bg-gray-100 text-[#003049]' : 'hover:text-[#003049] dark:text-gray-400'}`}
                >
                    <svg className="w-5 h-5 transition duration-75 dark:text-gray-400 group-hover:text-[#003049] dark:group-hover:text-white" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.75024 2C5.33603 2 5.00024 2.33579 5.00024 2.75V14.2505C5.00024 15.4932 6.0076 16.5005 7.25024 16.5005H9.5V19.5C9.5 20.8807 10.6193 22 12 22C13.3807 22 14.5 20.8807 14.5 19.5V16.5005H16.7502C17.9929 16.5005 19.0002 15.4932 19.0002 14.2505V2.75C19.0002 2.33579 18.6645 2 18.2502 2H5.75024ZM6.50024 11.0003V3.5H12.5V5.25154C12.5 5.66576 12.8358 6.00154 13.25 6.00154C13.6642 6.00154 14 5.66576 14 5.25154V3.5H15V6.25112C15 6.66534 15.3358 7.00112 15.75 7.00112C16.1642 7.00112 16.5 6.66534 16.5 6.25112V3.5H17.5002V11.0003H6.50024ZM6.50024 14.2505V12.5003H17.5002V14.2505C17.5002 14.6647 17.1645 15.0005 16.7502 15.0005H13.75C13.3358 15.0005 13 15.3363 13 15.7505V19.5C13 20.0523 12.5523 20.5 12 20.5C11.4477 20.5 11 20.0523 11 19.5V15.7505C11 15.3363 10.6642 15.0005 10.25 15.0005H7.25024C6.83603 15.0005 6.50024 14.6647 6.50024 14.2505Z" />
                    </svg>
                    <span className="ms-3">Art Materials</span>
                </Link>
            </li>
            <li>
                <Link
                    href={route('admin.orders')}
                    className={`flex items-center p-2 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group ${url.startsWith('/a/orders') ? 'bg-gray-100 text-[#003049]' : 'hover:text-[#003049] dark:text-gray-400'}`}
                >
                    <svg className="w-5 h-5 transition duration-75 dark:text-gray-400 group-hover:text-[#003049] dark:group-hover:text-white" fill="currentColor" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <path d="m47.44 61.66a1 1 0 0 1 1 .91v14.37a3.06 3.06 0 0 1 -2.87 3h-20.49a3.06 3.06 0 0 1 -3-2.88v-14.38a1 1 0 0 1 .91-1h24.5zm29.51 0a1 1 0 0 1 1 .91v14.37a3.06 3.06 0 0 1 -2.87 3h-20.49a3.06 3.06 0 0 1 -3-2.88v-14.38a1 1 0 0 1 .91-1h24.5zm-37.36 4.23-.09.11-5.82 6.32-2.63-2.55a.77.77 0 0 0 -1-.08l-.09.08-1.09 1a.62.62 0 0 0 -.07.9l.07.08 3.73 3.54a1.56 1.56 0 0 0 1.08.45 1.43 1.43 0 0 0 1.09-.45l3.14-3.32.63-.67 3.14-3.31a.78.78 0 0 0 .06-.9l-.06-.08-1.09-1a.76.76 0 0 0 -1-.12zm29.51 0-.1.11-5.82 6.32-2.64-2.55a.75.75 0 0 0 -1-.08l-.09.08-1.09 1a.62.62 0 0 0 -.07.9l.07.08 3.73 3.54a1.54 1.54 0 0 0 1.08.45 1.43 1.43 0 0 0 1.09-.45l3.14-3.32.63-.67 3.14-3.31a.78.78 0 0 0 .06-.9l-.06-.08-1.07-1.01a.76.76 0 0 0 -1-.11zm-23.43-14.41a3 3 0 0 1 2.85 2.87v3.24a1 1 0 0 1 -.84 1h-26.68a1 1 0 0 1 -.94-.9v-3.16a3 3 0 0 1 2.69-3.05h23zm31.48 0a3 3 0 0 1 2.85 2.87v3.24a1 1 0 0 1 -.84 1h-26.73a1 1 0 0 1 -1-.9v-3.16a3 3 0 0 1 2.68-3.05h23zm-15-21.29a1 1 0 0 1 1 .91v14.37a3.06 3.06 0 0 1 -2.87 3.05h-20.44a3.06 3.06 0 0 1 -3.05-2.87v-14.44a1 1 0 0 1 .9-1h24.51zm-7.85 4.22-.09.08-5.82 6.32-2.59-2.56a.76.76 0 0 0 -1-.07l-.09.07-1.08 1a.61.61 0 0 0 -.07.9l.07.08 3.72 3.53a1.56 1.56 0 0 0 1.09.45 1.43 1.43 0 0 0 1.08-.45l3.14-3.31.64-.67 3.13-3.32a.78.78 0 0 0 .06-.9l-.06-.07-1.08-1a.77.77 0 0 0 -1-.08zm7.9-14.41a3.06 3.06 0 0 1 3 2.88v3.23a1 1 0 0 1 -.91 1h-28.52a1 1 0 0 1 -1-.91v-3.14a3.06 3.06 0 0 1 2.87-3h24.56z"/>
                    </svg>
                    <span className="ms-3">Orders</span>
                </Link>
            </li>
            <li>
                <Link
                    href={route('admin.artists')}
                    className={`flex items-center p-2 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group ${url.startsWith('/a/artists') ? 'bg-gray-100 text-[#003049]' : 'hover:text-[#003049] dark:text-gray-400'}`}
                >
                    <svg className="w-5 h-5 transition duration-75 dark:text-gray-400 group-hover:text-[#003049] dark:group-hover:text-white"  viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.5 21H4C4 17.134 7.13401 14 11 14C11.1681 14 11.3348 14.0059 11.5 14.0176M15 7C15 9.20914 13.2091 11 11 11C8.79086 11 7 9.20914 7 7C7 4.79086 8.79086 3 11 3C13.2091 3 15 4.79086 15 7ZM12.5898 21L14.6148 20.595C14.7914 20.5597 14.8797 20.542 14.962 20.5097C15.0351 20.4811 15.1045 20.4439 15.1689 20.399C15.2414 20.3484 15.3051 20.2848 15.4324 20.1574L19.5898 16C20.1421 15.4477 20.1421 14.5523 19.5898 14C19.0376 13.4477 18.1421 13.4477 17.5898 14L13.4324 18.1574C13.3051 18.2848 13.2414 18.3484 13.1908 18.421C13.1459 18.4853 13.1088 18.5548 13.0801 18.6279C13.0478 18.7102 13.0302 18.7985 12.9948 18.975L12.5898 21Z"/>
                    </svg>
                    <span className="ms-3">Artists</span>
                </Link>
            </li>
        </ul>
    )
}
export default AdminSidebarLinks;
