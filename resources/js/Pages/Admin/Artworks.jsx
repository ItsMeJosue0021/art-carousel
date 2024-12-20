import React, { useState } from "react";
import AdminLayout from "@/Layouts/AdminLayout";
import { Head, usePage } from "@inertiajs/react";
import ArtworkPageHeader from "@/Components/Artwork/ArtworkPageHeader";
import ForSaleArtworks from "@/Components/Artwork/ForSaleArtworks";
import ForApprovalArtworks from "@/Components/Artwork/ForApprovalArtworks";
import SoldOutArtworks from "@/Components/Artwork/SoldOutArtworks";

const Artworks = () => {
    const role = usePage().props.auth.role;

    const [activeTab, setActiveTab] = useState('forSale');

    const switchTab = (tab) => {
        setActiveTab(tab);
    };

    return (
        <AdminLayout>
            <Head title="Artworks" />
            <div className="flex flex-col gap-5 p-5">
                <ArtworkPageHeader switchTab={switchTab} activeTab={activeTab} role={role}/>
                <div>
                    {activeTab === 'forSale' && (
                        <div className="flex flex-col gap-1">
                            <h1 className="text-lg font-semibold">For Sale Artworks</h1>
                            <ForSaleArtworks/>
                        </div>
                    )}
                    {activeTab === 'forApproval' && (
                        <div className="flex flex-col gap-1">
                            <h1 className="text-lg font-semibold">For Approval Artworks</h1>
                            <ForApprovalArtworks/>
                        </div>
                    )}
                    {activeTab === 'soldOut' && (
                        <div className="flex flex-col gap-1">
                            <h1 className="text-lg font-semibold">Sold Out Artworks</h1>
                            <SoldOutArtworks/>
                        </div>
                    )}
                </div>
            </div>
        </AdminLayout>
    )
}

export default Artworks;
