import React from "react";
import AdminLayout from "@/Layouts/AdminLayout";
import { Head } from "@inertiajs/react";
import AddArtworkForm from "@/Forms/AddArtworkForm";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AdminDashboard = () => {
    return (
        <AdminLayout>
            <Head title='Admin' />
            <ToastContainer />
            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 space-y-5">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            This is the admin side
                        </div>
                    </div>

                    <div className="bg-white shadow-sm rounded-lg">
                        <AddArtworkForm />
                    </div>
                </div>
            </div>
        </AdminLayout>
    )
}

export default AdminDashboard;
