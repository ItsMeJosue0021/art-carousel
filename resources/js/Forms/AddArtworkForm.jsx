import React, { useEffect, useState } from "react";
import { usePage } from "@inertiajs/react";
import api from "@/api";

const AddArtworkForm = () => {
    const user = usePage().props.auth.user;

    const [categories, setCategories] = useState([]);
    const [errors, setErrors] = useState({});


    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState(0);
    const [artworkCategoryId, setArtworkCategoryId] = useState(1);
    const [id, setId] = useState(0);

    useEffect(() => {
        fetchCategories();
    }, []);

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
            userId: user.id
        }

        try {
            const response = await api.post('/artworks', artworkData)
            console.log('Artwork has been saved.')
        } catch (error) {
            if (error.response && error.response.status === 422) {
                setErrors(error.response.data.errors);
                console.log(errors)
            }
        }
    }


    return (
        <div className="p-5 flex flex-col space-y-5">
            <div className="flex flex-col space-y-1">
                <p>Name</p>
                <input onChange={(e) => setName(e.target.value)} type="text" placeholder="Name.." className="px-4 py-2 text-sm border border-gray-300 rounded"/>
                {errors.name && <span className="text-xs text-red-500">{errors.name[0]}</span>}
            </div>

            <div className="flex flex-col space-y-1">
                <p>Dsescription</p>
                <textarea onChange={(e) => setDescription(e.target.value)} placeholder="Dsescription.." className="h-26 px-4 py-2 text-sm border border-gray-300 rounded"></textarea>
                {errors.description && <span className="text-xs text-red-500">{errors.description[0]}</span>}
            </div>

            <div className="flex flex-col space-y-1">
                <p>Price</p>
                <input onChange={(e) => setPrice(e.target.value)} type="number" placeholder="Price.." className="px-4 py-2 text-sm border border-gray-300 rounded"/>
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

            <div>
                <p>{name}</p>
                <p>{description}</p>
                <p>{price}</p>
                <p>{artworkCategoryId}</p>
                <p>{user.id}</p>
            </div>

        </div>
    )
}

export default AddArtworkForm;
