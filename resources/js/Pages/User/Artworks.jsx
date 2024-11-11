import React, { useState } from "react";
import UserLayout from "@/Layouts/UserLayout";
import AddArtworkForm from "@/Forms/AddArtworkForm";
import ArtworkTable from "@/Tables/ArtworkTable";
import { Head } from "@inertiajs/react";
import ForApprovalArtworks from "@/Components/Artwork/ForApprovalArtworks";
import ForSaleArtworks from "@/Components/Artwork/ForSaleArtworks";
import SoldOutArtworks from "@/Components/Artwork/SoldOutArtworks";
import FormModal from "@/Components/FormModal";
import ArtworkPageHeader from "@/Components/Artwork/ArtworkPageHeader";

const Artworks = () => {

    const [activeTab, setActiveTab] = useState('forSale');
    const [showAddArtworModal, setShowAddArtworModal] = useState(false);
    const [fetchTrigger, setFetchTrigger] = useState(0);

    const triggerFtech = () => {
        setFetchTrigger(prev => prev + 1);
    };

    const switchTab = (tab) => {
        setActiveTab(tab);
    };

    const openAddArtworModal = () => {
        setShowAddArtworModal(true);
    };

    const closeAddArtworModal = () => {
        setShowAddArtworModal(false);
    };

    return (
        <UserLayout>
            <Head title="Artworks" />
            <div className="flex flex-col gap-5 p-5">
                <ArtworkPageHeader switchTab={switchTab} activeTab={activeTab} openAddMaterialModal={openAddArtworModal}/>
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
                            <ForApprovalArtworks fetchTrigger={fetchTrigger}/>
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
            <FormModal show={showAddArtworModal} onClose={closeAddArtworModal}>
                <AddArtworkForm onAddSuccess={triggerFtech}/>
            </FormModal>
        </UserLayout>
    )
}

export default Artworks;
