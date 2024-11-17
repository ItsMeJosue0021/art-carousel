import AdminLayout from "@/Layouts/AdminLayout";
import { usePage, Head } from "@inertiajs/react";
import React from "react";
import { useState } from "react";
import SoldOutMaterial from "@/Components/ArtMaterial/SoldOutMaterial";
import ForSaleMaterial from "@/Components/ArtMaterial/ForSaleMaterial";
import ForApprovalMaterial from "@/Components/ArtMaterial/ForApprovalMaterial";
import ArtworkPageHeader from "@/Components/Artwork/ArtworkPageHeader";

const Materials = () => {

    const role = usePage().props.auth.role;

    const [activeTab, setActiveTab] = useState('forSale');

    const switchTab = (tab) => {
        setActiveTab(tab);
    };

    return (
        <AdminLayout>
             <Head title="Art Materials" />
            <div className="flex flex-col gap-5 p-5">
                <ArtworkPageHeader switchTab={switchTab} activeTab={activeTab} role={role}/>
                <div>
                    {activeTab === 'forSale' && (
                        <div className="flex flex-col gap-1">
                            <h1 className="text-lg font-semibold">For Sale Materials</h1>
                            <ForSaleMaterial />
                        </div>
                    )}
                    {activeTab === 'forApproval' && (
                        <div className="flex flex-col gap-1">
                            <h1 className="text-lg font-semibold">For Approval Materials</h1>
                            <ForApprovalMaterial/>
                        </div>
                    )}
                    {activeTab === 'soldOut' && (
                        <div className="flex flex-col gap-1">
                            <h1 className="text-lg font-semibold">Sold Out Materials</h1>
                            <SoldOutMaterial/>
                        </div>
                    )}
                </div>
            </div>
        </AdminLayout>
    )
}

export default Materials;
