import React, { useEffect, useState } from "react";
import UserLayout from "@/Layouts/UserLayout";
import { Head } from "@inertiajs/react";
import FormModal from "@/Components/FormModal";
import AddMaterialForm from "@/Forms/AddMaterialForm";
import SoldOutMaterial from "@/Components/ArtMaterial/SoldOutMaterial";
import ForSaleMaterial from "@/Components/ArtMaterial/ForSaleMaterial";
import ForApprovalMaterial from "@/Components/ArtMaterial/ForApprovalMaterial";
import ArtworkPageHeader from "@/Components/Artwork/ArtworkPageHeader";

const ArtMaterials = () => {

    const [activeTab, setActiveTab] = useState('forSale');
    const [showAddMaterialModal, setShowMaterialModal] = useState(false);
    const [fetchTrigger, setFetchTrigger] = useState(0);

    const switchTab = (tab) => {
        setActiveTab(tab);
    }

    const triggerFtech = () => {
        setFetchTrigger(prev => prev + 1);
    };

    const openAddMaterialModal = () => {
        setShowMaterialModal(true);
    };

    const closeMaterialModal = () => {
        setShowMaterialModal(false);
    };

    return (
        <UserLayout>
            <Head title="Art Materials" />
            <div className="flex flex-col gap-5 p-5">
                <ArtworkPageHeader switchTab={switchTab} activeTab={activeTab} openAddMaterialModal={openAddMaterialModal}/>
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
                            <ForApprovalMaterial fetchTrigger={fetchTrigger} />
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
            <FormModal show={showAddMaterialModal} onClose={closeMaterialModal}>
                <AddMaterialForm onAddSuccess={triggerFtech}/>
            </FormModal>
        </UserLayout>
    )
}

export default ArtMaterials;
