import React from "react";
import { usePage } from "@inertiajs/react";
import AdminSidebarLinks from "./AdminSidebarLinks";
import UserSidebarLinks from "./UserSidebarLinks";


const SideBar = () => {
    const role = usePage().props.auth.role;

    const { url } = usePage();

    return (
        <aside id="default-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
            <div className="flex flex-col gap-5 h-full px-3 py-4 overflow-y-auto bg-[#003049] dark:bg-gray-800">
                <div className="flex items-center justify-start">
                    <div className="p-2 rounded-lg">
                        <h1 className="text-white text-3xl font-medium"><span className="font-light">Art</span> Carousel</h1>
                    </div>
                </div>
                {role === 'admin' ? (
                    <AdminSidebarLinks/>
                ) : (
                    <UserSidebarLinks/>
                )}
            </div>
        </aside>
    );
};

export default SideBar;
