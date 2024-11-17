import React, { useState } from "react";
import { BASE_URL } from "@/config";
import api from "@/api";
import { usePage } from "@inertiajs/react";
import { router } from '@inertiajs/react'
import { toast } from 'react-toastify';

const ViewMore = ({product, productType}) => {

    const user = usePage().props.auth.user;

    const [quantity, setQuantity] = useState(1);
    const [productId, setProductId] = useState(product.id);

    const addToCart = () => {
        if (!user) {
            router.visit('/login');
            return;
        }

        const item = {
            productId: productId,
            productType: productType,
            quantity: quantity
        }

        api.post(`/${user.id}/add-to-cart`, item).then((response) => {
            console.log(response.data.data);
            toast.success('Item added to cart!');
        }).catch((error) => {
            console.log(error);
            toast.error('Something went wrong!');
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

    return (
        <div className="text-gray-600 body-font overflow-hidden">
            <div className="container p-12 pt-2 px-12 mx-auto">
                <div className="mx-auto flex flex-wrap">
                    <img alt="..." className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src={`${BASE_URL}/${product.image}`}/>
                    <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0 flex flex-col justify-center" >
                        <h2 className="text-sm title-font text-gray-500 tracking-widest">ARTWORK TITLE</h2>
                        <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{product.name}</h1>
                        <p className="leading-relaxed">{product.description}</p>
                        <div className="flex border-t-2 border-gray-100 mt-5 py-4">
                            <span className="title-font font-medium text-2xl text-gray-900">{formatPrice(product.price)}</span>
                            <button onClick={addToCart} className="flex ml-auto text-white bg-blue-600 border-0 py-2 px-6 focus:outline-none hover:bg-blue-700 rounded">Add to cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewMore;
