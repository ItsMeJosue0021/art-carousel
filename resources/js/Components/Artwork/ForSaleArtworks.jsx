import React, { useEffect, useState } from "react";
import { usePage } from "@inertiajs/react";
import ArtworkTable from "@/Tables/ArtworkTable";
import api from "@/api";
import Pagination from "./../Pagination";
import FormModal from "./../FormModal";
import ArtworkDetails from "../ArtworkDetails";
import EditArtworkForm from "@/Forms/EditArtworkForm";

const ForSaleArtworks = () => {
    const user = usePage().props.auth.user;
    const role = usePage().props.auth.role;

    const [artworks, setArtworks] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);

    const [selectedArtwork, setSelectedArtwork] = useState(null);
    const [showDetailModal, setShowDetailModal] = useState(false);

    const [showEditModal, setShowEditModal] = useState(false);

    useEffect(() => {
        fetchForSalelArtworks();
    }, [currentPage]);

    const fetchForSalelArtworks = async () => {
        try {
            if (role === 'admin') {
                const response = await api.get(`/for-sale/artworks?page=${currentPage}`);
                setArtworks(response.data.data);
                setTotalPages(response.data.meta.last_page);
                setIsLoading(false);
            } else if (role === 'user') {
                const response = await api.get(`/${user.id}/artworks/for-sale?page=${currentPage}`);
                setArtworks(response.data.data);
                setTotalPages(response.data.meta.last_page);
                setIsLoading(false);
            }
        } catch (error) {
            console.log(error);
            setIsLoading(false);
        }
    }

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const handleSelectedArtwork = (artwork) => {
        setSelectedArtwork(artwork);
        setShowDetailModal(true);
    }

    const closeEditModal = () => {
        setShowDetailModal(false);
    }


    return (
        <div>
            <ArtworkTable
            artworks={artworks}
            isLoading={isLoading}
            onDeleteSucces={fetchForSalelArtworks}
            handleSelectedArtwork={handleSelectedArtwork}/>
            {!isLoading && artworks.length > 0 && (
                <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange} />
            )}
            {selectedArtwork && (
                <FormModal show={showDetailModal} onClose={closeEditModal}>
                    <ArtworkDetails artwork={selectedArtwork}/>
                </FormModal>
            )}
        </div>
    )
}

export default ForSaleArtworks;


