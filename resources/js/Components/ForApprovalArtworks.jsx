import React, { useEffect, useState } from "react";
import ArtworkTable from "@/Tables/ArtworkTable";
import api from "@/api";
import Pagination from "./Pagination";

const ForApprovalArtworks = () => {

    const [artworks, setArtworks] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);

    useEffect(() => {
        fetchForApprovalArtworks();
    }, [currentPage]);

    const fetchForApprovalArtworks = async () => {
        try {
            const response = await api.get(`http://127.0.0.1:8000/api/artworks?page=${currentPage}`);
            setArtworks(response.data.data);
            console.log(response.data.data);
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


    return (
        <div>
            <ArtworkTable artworks={artworks} isLoading={isLoading}/>
            <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
        </div>
    )
}

export default ForApprovalArtworks;
