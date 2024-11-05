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
        </ul>
    )
}
export default AdminSidebarLinks;
