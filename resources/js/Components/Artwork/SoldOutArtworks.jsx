import React, { useEffect, useState } from "react";
import { usePage } from "@inertiajs/react";
import ArtworkTable from "@/Tables/ArtworkTable";
import api from "@/api";
import Pagination from "./../Pagination";
import FormModal from "./../FormModal";
import ArtworkDetails from "./../ArtworkDetails";

const SoldOutArtworks = () => {
    const user = usePage().props.auth.user;

    const [artworks, setArtworks] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);

    const [selectedArtwork, setSelectedArtwork] = useState(null);
    const [showDetailModal, setShowDetailModal] = useState(false);

    useEffect(() => {
        fetchForApprovalArtworks();
    }, [currentPage]);

    const fetchForApprovalArtworks = async () => {
        try {
            const response = await api.get(`/${user.id}/artworks/sold-out?page=${currentPage}`);
            setArtworks(response.data.data);
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

    const handleSelectedArtwork = (artwork) => {
        setSelectedArtwork(artwork);
        setShowDetailModal(true);
    }

    const closeDetailModal = () => {
        setShowDetailModal(false);
    }


    return (
        <div>
            <ArtworkTable artworks={artworks} isLoading={isLoading} handleSelectedArtwork={handleSelectedArtwork}/>
            {!isLoading && artworks.length > 0 && (
                <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
            )}
            {selectedArtwork && (
                <FormModal show={showDetailModal} onClose={closeDetailModal}>
                    <ArtworkDetails artwork={selectedArtwork}/>
                </FormModal>
            )}
        </div>
    )
}

export default SoldOutArtworks;

