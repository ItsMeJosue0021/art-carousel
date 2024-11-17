import React from "react";
import api from "@/api";
import { useState, useEffect } from "react";
import { usePage } from "@inertiajs/react";
import MaterialTable from "@/Tables/MaterialTable";
import Pagination from "../Pagination";
import EditMaterialForm from "@/Forms/EditMaterialForm";
import FormModal from "../FormModal";
import ArtMaterialDetails from "./ArtMaterialDetails";

const ForApprovalMaterial = ({fetchTrigger}) => {
    const user = usePage().props.auth.user;
    const role = usePage().props.auth.role;

    const [materials, setMaterials] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);

    const [selectedMaterial, setSelectedMaterial] = useState(null);
    const [showDetailModal, setShowDetailModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);

    useEffect(() => {
        fetchMaterials();
    },[currentPage, fetchTrigger]);

    const fetchMaterials = async () => {
        try {
            if (role === 'admin') {
                const response = await api.get(`/for-approval/materials?page=${currentPage}`);
                setMaterials(response.data.data);
                setTotalPages(response.data.meta.last_page);
            } else if (role === 'user') {
                const response = await api.get(`/${user.id}/materials/for-approval?page=${currentPage}`);
                setMaterials(response.data.data);
                setTotalPages(response.data.meta.last_page);
            }
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
        role === 'admin' ? setShowDetailModal(true) : setShowEditModal(true);
    }

    const closeDetailModal = () => {
        setShowDetailModal(false);
    }

    const closeEditModal = () => {
        setShowEditModal(false);
    }

    return (
        <div>
            <MaterialTable materials={materials} isLoading={isLoading} handleSelectedMaterial={handleSelectedMaterial} onDeleteSucces={fetchMaterials}/>
            {!isLoading && materials.length > 0 && (
                <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
            )}

            {selectedMaterial && (
                <FormModal show={showDetailModal} onClose={closeDetailModal}>
                    <ArtMaterialDetails material={selectedMaterial}/>
                </FormModal>
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
