import React, { useState } from "react";
import ArtworkTable from "@/Tables/ArtworkTable";

const SoldOutArtworks = () => {
    const [artworks, setArtworks] = useState([]);
    return (
        <ArtworkTable artworks={artworks}/>
    )
}

export default SoldOutArtworks;
