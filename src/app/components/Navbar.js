'use client'

import Link from 'next/link';
import React from 'react'
import { FaShoppingCart } from "react-icons/fa";
import HomeContext from '../context/HomeContext';
import { useContext } from 'react';

const Navbar = () => {
    const { setIsSearched } = useContext(HomeContext);
    const { IsSearched } = useContext(HomeContext);

    function handleClick(){
        setIsSearched(false);
    }

    return (
        <div className="flex justify-between items-center bg-blue-600 py-4 px-6">
            <Link href='/'> <button type='button' className="text-white text-xl font-bold" onClick={handleClick}>ABHI Store</button> </Link> 
            <Link href="/../cart" className="text-white"><FaShoppingCart className="inline-block text-xl" /> </Link>
        </div>
    );
};

export default Navbar                                             