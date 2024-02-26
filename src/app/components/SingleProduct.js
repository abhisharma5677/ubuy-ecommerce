import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';

const SingleProduct = ({ categoryName }) => {
    const [productData, setProductData] = useState(null);
    const [productData2, setProductData2] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://fakestoreapi.com/products/category/${categoryName}`);
                setProductData(response.data[2]);
                setProductData2(response.data[1]);
            } catch (error) {
                console.error('Error fetching product data:', error);
            }
        };

        fetchData();
    }, [categoryName]); // Re-run effect when categoryName changes

    if (!productData) {
        return <div>Loading...</div>;
    }

    return (
        <div className="flex flex-col items-center justify-center space-y-4 mt-[70px] bg-white shadow-2xl rounded-lg py-16 ">
            <div className='font-extrabold text-[20px] mb-[30px] ' >{productData.category.charAt(0).toUpperCase() + productData.category.slice(1)}</div>
            <div>
                <Link href={`/../../${productData.id}`}>
                    <Image src={productData.image} alt="Product image" height={400} width={400} className="rounded-lg" />
                </Link>
                <div className="text-lg font-bold">{productData.title}</div>
                <div className="text-gray-700 font-bold">From ${productData.price}</div>
            </div>
            <div className='pt-[100px]'>
                <Link href={`/../../${productData2.id}`}>
                    <Image src={productData2.image} alt="Product image" height={400} width={400} className="rounded-lg" />
                </Link>
                <div className="text-lg font-bold">{productData2.title}</div>
                <div className="text-gray-700 font-bold">From ${productData2.price}</div>
            </div>
        </div>
    );
};

export default SingleProduct;