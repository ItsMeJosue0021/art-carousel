import React, { useEffect, useState } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { usePage } from "@inertiajs/react";
import api from "@/api";

const AddArtworkForm = () => {
    const user = usePage().props.auth.user;

    const [categories, setCategories] = useState([]);
    const [errors, setErrors] = useState({});
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [artworkCategoryId, setArtworkCategoryId] = useState(1);
    const [id, setId] = useState(0);
    const [image, setImage] = useState('');
    const [imageURL, setImageURL] = useState('');

    useEffect(() => {
        fetchCategories();
    }, []);

    const handleFileChange = (e) => {
            const file = e.target.files[0];
            setImage(file);
            setImageURL(URL.createObjectURL(file));
        }

    const fetchCategories = async () => {
        try {
            const response = await api.get('/artworks/categories');
            const data  = await response.data.data;
            setCategories(data);
        } catch (error) {
            console.error('Error fetching categories:', error);
        }
    }

    const addArtwork = async () => {
        const artworkData = {
            name: name,
            description: description,
            price: price,
            artworkCategoryId: artworkCategoryId,
            userId: user.id,
            image: image,
        }

        try {
            const response = await api.post('/artworks', artworkData, {
                headers: { 'Content-Type': 'multipart/form-data' }
            })
            toast.success('Artwork saved successfully!');
            setName('');
            setDescription('');
            setPrice('');
            setArtworkCategoryId(1);
            setId('');
            setErrors({});
            setImage(null);
            setImageURL('');
        } catch (error) {
            if (error.response && error.response.status === 422) {
                setErrors(error.response.data.errors);
                console.log(errors)
            } else {
                console.error('Error posting data:', error);
                toast.error('Failed to save artwork.');
            }
        }
    }


    return (
        <div className="p-6 flex items-start gap-5">
            <div className="w-full flex flex-col gap-5">
                <div className="flex flex-col space-y-1">
                    <p>Name</p>
                    <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Name.." className="px-4 py-2 text-sm border border-gray-300 rounded"/>
                    {errors.name && <span className="text-xs text-red-500">{errors.name[0]}</span>}
                </div>

                <div className="flex flex-col space-y-1">
                    <p>Dsescription</p>
                    <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Dsescription.." className="h-26 px-4 py-2 text-sm border border-gray-300 rounded"></textarea>
                    {errors.description && <span className="text-xs text-red-500">{errors.description[0]}</span>}
                </div>

                <div className="flex flex-col space-y-1">
                    <p>Price</p>
                    <input value={price} onChange={(e) => setPrice(e.target.value)} type="number" placeholder="Price.." className="px-4 py-2 text-sm border border-gray-300 rounded"/>
                    {errors.price && <span className="text-xs text-red-500">{errors.price[0]}</span>}
                </div>

                <div className="flex flex-col space-y-1">
                    <p>Category</p>
                    <select value={artworkCategoryId} onChange={(e) => setArtworkCategoryId(e.target.value)} className="px-4 py-2 text-sm border border-gray-300 rounded">
                        {categories.map(category => (
                            <option key={category.id} value={category.id}>{category.name}</option>
                        ))}
                    </select>
                    {errors.artworkCategoryId && <span className="text-xs text-red-500">{errors.artworkCategoryId[0]}</span>}
                </div>

                <div className="flex">
                    <button onClick={addArtwork} className="w-full px-4 py-2 text-sm text-white bg-blue-600 hover:bg-blue-700 rounded">Save</button>
                </div>
            </div>

            <div className="w-full flex items-center max-w-screen-sm mx-auto mb-3 space-y-4 sm:flex sm:space-y-0">
                <div className="relative w-full">
                    <div className="items-center justify-center max-w-xl mx-auto">
                        <label className="flex justify-center w-full h-[400px] px-4 transition bg-white hover:bg-gray-50 border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none" id="drop">
                        {imageURL ? (
                                <img src={imageURL} alt="Selected Image" className="rounded" />
                            ) : (
                                <div className="flex items-center justify-center">
                                    <span className="flex flex-col items-center space-x-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
                                        </svg>
                                        <span className="font-medium text-gray-600">Drop image to Attach, or
                                            <span className="text-blue-600 underline ml-[4px]">browse</span>
                                        </span>
                                        {errors.image && <span className="text-xs text-red-500">{errors.image[0]}</span>}
                                    </span>
                                </div>
                                )}
                                <input type="file" onChange={handleFileChange}  className="hidden" accept="image/png,image/jpeg" id="input"/>
                        </label>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default AddArtworkForm;