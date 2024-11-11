import React from "react";
import api from "@/api";
import { useState, useEffect } from "react";
import { usePage } from "@inertiajs/react";
import MaterialTable from "@/Tables/MaterialTable";
import Pagination from "../Pagination";
import EditMaterialForm from "@/Forms/EditMaterialForm";
import FormModal from "../FormModal";

const ForApprovalMaterial = ({fetchTrigger}) => {
    const user = usePage().props.auth.user;

    const [materials, setMaterials] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);

    const [selectedMaterial, setSelectedMaterial] = useState(null);
    const [showEditModal, setShowEditModal] = useState(false);

    useEffect(() => {
        fetchMaterials();
    },[currentPage, fetchTrigger]);

    const fetchMaterials = async () => {
        try {
            const response = await api.get(`/${user.id}/materials/for-approval?page=${currentPage}`);
            setMaterials(response.data.data);
            setTotalPages(response.data.meta.last_page);
            setIsLoading(false);
        } catch (error) {
            console.log(error);
            setIsLoading(false);
        }
    }

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const handleSelectedMaterial = (material) => {
        setSelectedMaterial(material);
        setShowEditModal(true);
    }

    const closeEditModal = () => {
        setShowEditModal(false);
    }

    return (
        <div>
            <MaterialTable materials={materials} isLoading={isLoading} handleSelectedMaterial={handleSelectedMaterial}/>
            {!isLoading && materials.length > 0 && (
                <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
            )}

            {selectedMaterial && (
                <FormModal show={showEditModal} onClose={closeEditModal}>
                    <EditMaterialForm material={selectedMaterial} onEditSuccess={fetchMaterials}/>
                </FormModal>
            )}

        </div>
    )
}

export default ForApprovalMaterial;
