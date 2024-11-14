import React from "react";
import { Link, usePage} from "@inertiajs/react";
import logo from '@/Assets/logo.png';
import NavDropdown from '@/Components/NavDropdown';
import { useEffect, useState } from 'react';
import api from '@/api';

const WebLayout = ({children}) => {

    const user = usePage().props.auth.user;
    const role = usePage().props.auth.role;

    const [items, setItems] = useState([]);

    const fetchArtworkCategories = () => {
        api.get('/artworks-categories').then((response) => {
            setItems(response.data.data);
        }).catch((error) => {
            console.log(error);
        });
    }

    useEffect(() => {
        fetchArtworkCategories();
    }, []);


    return (

        <div>
             <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
                <div className="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a  className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src={logo} alt="logo" className='h-8 ' />
                    </a>
                    <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                    <nav className="-mx-3 flex flex-1 justify-end">
                        {user ? (
                            <Link
                                href={route(role === 'admin' ? 'admin.dashboard' : 'user.dashboard')}
                                className="rounded-md px-3 py-2 ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                            >
                                Dashboard <span className='text-white'>{role}</span>
                            </Link>

                        ) : (
                            <>
                                <Link
                                    href={route('login')}
                                    className="rounded-md px-3 py-2 ring-1 ring-transparent transition hover:text-blue-500 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                                >
                                    Log in
                                </Link>
                                <Link
                                    href={route('register')}
                                    className="rounded-md px-3 py-2  ring-1 ring-transparent transition hover:text-blue-500 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                                >
                                    Register
                                </Link>

                            </>
                        )}
                    </nav>
                    </div>
                    <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                        <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li>
                                <Link href={route('welcome')}>
                                    <span className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Home</span>
                                </Link>
                            </li>
                            <li>
                                <Link href={route('gallery')} >
                                    <span className="block py-2 px-3 text-black bg-blue-700 rounded md:bg-transparent  md:p-0 md:dark:text-blue-500" >Gallery</span>
                                </Link>
                            </li>
                            <li>
                                <Link href={route('materials')} >
                                    <span className="block py-2 px-3 text-black bg-blue-700 rounded md:bg-transparent  md:p-0 md:dark:text-blue-500" >Materials</span>
                                </Link>
                            </li>
                            <li>
                                <Link href={route('community')} >
                                    <span className="block py-2 px-3 text-black bg-blue-700 rounded md:bg-transparent  md:p-0 md:dark:text-blue-500" >Community</span>
                                </Link>
                            </li>
                            <li>
                                <Link href={route('exhibit')} >
                                    <span className="block py-2 px-3 text-black bg-blue-700 rounded md:bg-transparent  md:p-0 md:dark:text-blue-500" >Exhibit</span>
                                </Link>
                            </li>
                            {/* <NavDropdown  lable={'Galley'} items={items} />
                            <NavDropdown lable={'Mertials'} items={items} /> */}
                        </ul>
                    </div>
                </div>
            </nav>
            {children}
        </div>
    )
}

export default WebLayout;
