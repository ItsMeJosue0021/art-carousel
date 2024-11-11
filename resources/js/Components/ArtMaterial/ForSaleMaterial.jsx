import React from "react";
import api from "@/api";
import { useEffect, useState } from "react";
import MaterialTable from "@/Tables/MaterialTable";
import { usePage } from "@inertiajs/react";
import Pagination from "../Pagination";
import FormModal from "../FormModal";
import ArtMaterialDetails from "./ArtMaterialDetails";

const ForSaleMaterial = () => {
    const user = usePage().props.auth.user;

    const [materials, setMaterials] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);

    const [selectedMaterial, setSelectedMaterial] = useState(null);
    const [showDetailModal, setShowDetailModal] = useState(false);

    useEffect(() => {
        fetchMaterials();
    },[currentPage]);

    const fetchMaterials = async () => {
        try {
            const response = await api.get(`/${user.id}/materials/for-sale?page=${currentPage}`);
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

    const handleSelectedArtwork = (material) => {
        setSelectedMaterial(material);
        setShowDetailModal(true);
    }

    const closeDetailModal = () => {
        setShowDetailModal(false);
    }

    return (
        <div>
            <MaterialTable materials={materials} isLoading={isLoading} handleSelectedMaterial={handleSelectedArtwork}/>
            {!isLoading && materials.length > 0 && (
                <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
            )}
            {selectedMaterial && (
                <FormModal show={showDetailModal} onClose={closeDetailModal}>
                    <ArtMaterialDetails material={selectedMaterial}/>
                </FormModal>
            )}

        </div>
    )
}

export default ForSaleMaterial;
