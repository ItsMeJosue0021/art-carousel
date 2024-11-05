import React from "react";
import AdminLayout from "@/Layouts/AdminLayout";
import AddArtworkForm from "@/Forms/AddArtworkForm";

const Artworks = () => {
    return (
        <AdminLayout>
            <div>
                <AddArtworkForm />
            </div>
        </AdminLayout>
    )
}

export default Artworks;
