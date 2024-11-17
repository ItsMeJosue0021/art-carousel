import React, { useEffect, useState } from "react";
import { usePage } from "@inertiajs/react";
import ArtworkTable from "@/Tables/ArtworkTable";
import api from "@/api";
import Pagination from "./../Pagination";
import FormModal from "./../FormModal";
import EditArtworkForm from "@/Forms/EditArtworkForm";
import ArtworkDetails from "../ArtworkDetails";

const ForApprovalArtworks = ({fetchTrigger}) => {
    const user = usePage().props.auth.user;
    const role = usePage().props.auth.role;

    const [artworks, setArtworks] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);

    const [selectedArtwork, setSelectedArtwork] = useState(null);
    const [showEditModal, setShowEditArtworModal] = useState(false);

    const [showDetailModal, setShowDetailModal] = useState(false);

    useEffect(() => {
        fetchForApprovalArtworks();
    }, [currentPage, fetchTrigger]);

    const fetchForApprovalArtworks = async () => {
        try {
            if (role === 'admin') {
                const response = await api.get(`/for-approval/artworks?page=${currentPage}`);
                setArtworks(response.data.data);
                setTotalPages(response.data.meta.last_page);
                setIsLoading(false);
            } else if (role === 'user') {
                const response = await api.get(`/${user.id}/artworks/for-approval?page=${currentPage}`);
                setArtworks(response.data.data);
                setTotalPages(response.data.meta.last_page);
                setIsLoading(false);
            }
        } catch (error) {
            console.log(error);
            setIsLoading(false);
        }
    };

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const handleSelectedArtwork = (artwork) => {
        setSelectedArtwork(artwork);
        if (role === 'admin') {
            setShowDetailModal(true);
        } else {
            setShowEditArtworModal(true);
        }
        console.log(artwork);
    }

    const closeEditModal = () => {
        setShowEditArtworModal(false);
    }

    const closeDetailModal = () => {
        setShowDetailModal(false);
    }


    return (
        <div>
            <ArtworkTable artworks={artworks} isLoading={isLoading} handleSelectedArtwork={handleSelectedArtwork} onDeleteSucces={fetchForApprovalArtworks}/>
            {!isLoading && artworks.length > 0 && (
                <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
            )}
            {selectedArtwork && (
                <FormModal
                show={showEditModal}
                onClose={closeEditModal}>
                    <EditArtworkForm artwork={selectedArtwork} onEditSuccess={fetchForApprovalArtworks}/>
                </FormModal>
            )}

            {selectedArtwork && (
                <FormModal
                show={showDetailModal}
                onClose={closeDetailModal}>
                    <ArtworkDetails artwork={selectedArtwork}/>
                </FormModal>
            )}
        </div>
    )
}

export default ForApprovalArtworks;
