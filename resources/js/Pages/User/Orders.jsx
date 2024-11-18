import React from "react";
import { Head } from "@inertiajs/react";
import UserLayout from "@/Layouts/UserLayout";

const Orders = () => {
    return (
        <UserLayout>
            <Head title='Orders' />
            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            This is your orders page
                        </div>
                    </div>
                </div>
            </div>
        </UserLayout>
    )
}

export default Orders;
