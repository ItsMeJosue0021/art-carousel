import React, { useEffect, useState } from "react";
import WebLayout from "@/Layouts/WebLayout";
import api from "@/api";
import { BASE_URL } from "@/config";
import ViewMoreModal from "@/Components/ViewMoreModal";
import ViewMore from "@/Components/ViewMore";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Gallery = () => {

    const [artworks, setArtworks] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedArtwork, setSelectedArtwork] = useState(null);
    const [viewMore, setViewMore] = useState(false);

    useEffect(() => {
        fetchArtworks();
        fetchArtworkCategories();
    }, []);

    const fetchArtworks = () => {
        api.get('/for-sale/artworks').then((response) => {
            setArtworks(response.data.data);
        }).catch((error) => {
            console.log(error);
        });
    };

    const filterByCategory = (category) => {
        api.get(`/for-sale/artworks?category=${category}`).then((response) => {
            setArtworks(response.data.data);
        }).catch((error) => {
            console.log(error);
        });
    }

    const filterBySearch = (search) => {
        api.get(`/for-sale/artworks?search=${search}`).then((response) => {
            setArtworks(response.data.data);
        }).catch((error) => {
            console.log(error);
        });
    }

    const fetchArtworkCategories = () => {
        api.get('/artworks-categories').then((response) => {
            setCategories(response.data.data);
        }).catch((error) => {
            console.log(error);
        });
    }

    const formatPrice = (price) => {
        return new Intl.NumberFormat('en-PH', {
          style: 'currency',
          currency: 'PHP',
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        }).format(price);
    };

    const truncateTextByWords = (text, limit) => {
        const words = text.split(' ');
        if (words.length > limit) {
          return words.slice(0, limit).join(' ') + '...';
        }
        return text;
    };

    const handleCategoryChange = (event) => {
        const selectedCategory = event.target.value;
        if (selectedCategory === 'Sort by category') {
            fetchArtworks();
        } else {
            filterByCategory(selectedCategory);
        }
    };

    const handleSearch = (event) => {
        const search = event.target.value;
        filterBySearch(search);
    }

    const handleViewMore = (artwork) => {
        setSelectedArtwork(artwork);
        setViewMore(true);
    }

    const closeViewMore = () => {
        setViewMore(false);
    }



    return (
        <WebLayout>
            <div className="relative bg-p9 bg-cover bg-center w-full h-96 flex items-center justify-center">
                <div className="absolute top-0 w-full h-full bg-gradient-to-t from-black opacity-80"></div>
                <div className="max-w-screen-lg mx-auto pt-20 h-full text-white flex flex-col items-center justify-center gap-8 z-10">
                    <h1 className="text-5xl font-bold">Welcome to Our Art Gallery</h1>
                    <p className="text-lg text-center">
                        Discover a world where creativity knows no bounds. Our gallery showcases an exquisite collection of artwork that spans various styles,
                        mediums, and eras. Immerse yourself in the vibrant colors, intricate details, and powerful emotions that each piece evokes. Whether you're
                        an avid art collector or a curious visitor, we invite you to explore and be inspired by the beauty and depth of our curated selection.
                    </p>
                </div>
            </div>


            <div className="max-w-screen-2xl mx-auto flex items-center justify-center gap-5 my-5">
               <div className="flex items-center gap-5 w-fit p-5 py-3 shadow rounded-md">
                <div className="w-56">
                        <select onChange={handleCategoryChange} id="categories" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option selected>Select Category</option>
                            {categories.map((categpory) => (
                                <option key={categpory.id} defaultValue={categpory.name}>{categpory.name}</option>
                            ))}
                        </select>
                    </div>

                    <div className="flex items-center w-96">
                        <label htmlFor="simple-search" className="sr-only">Search</label>
                        <div className="relative w-full">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5v10M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0V6a3 3 0 0 0-3-3H9m1.5-2-2 2 2 2"/>
                                </svg>
                            </div>
                            <input onChange={handleSearch} type="text" id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search here..." required />
                        </div>
                        <button type="submit" className="p-2.5 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                            </svg>
                            <span className="sr-only">Search</span>
                        </button>
                    </div>
               </div>
            </div>

            <div >
                <div className="max-w-screen-2xl flex flex-wrap items-center justify-evenly mx-auto p-4 gap-5">
                    {artworks.length == 0 ? (
                         <div className="w-full h-96 flex items-center justify-center">
                         <span>No content available.</span>
                     </div>
                    ) : artworks.map((artwork) => (
                        <div key={artwork.id} className="relative h-72 w-96 lg:w-[450px] shadow-md rounded group cursor-pointer overflow-hidden">
                            <img src={`${BASE_URL}/${artwork.image}`} alt=".." className="w-full h-full object-cover object-center rounded transform transition duration-500 group-hover:scale-110" />
                            <div className="flex items-end p-4 group-hover:opacity-100 opacity-0 absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black rounded">
                                <div className="w-full text-white gap-1">
                                    <h1 className="text-xl font-bold">{artwork.name}</h1>
                                    <p className="text-sm">{truncateTextByWords(artwork.description, 15)}</p>
                                    <div className="w-full flex items-center justify-between mt-2">
                                        <p className="font-bold text-xl">{formatPrice(artwork.price)}</p>
                                        <button onClick={() => handleViewMore(artwork)} className="px-4 py-2 text-sm text-white font-semibold rounded bg-blue-600 hover:bg-blue-700">View more</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <ViewMoreModal show={viewMore} onClose={closeViewMore}>
                <ViewMore product={selectedArtwork} productType={'artwork'}/>
            </ViewMoreModal>
            <ToastContainer/>
        </WebLayout>

    )
}

export default Gallery;


