import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';

const SingleProduct = ({ categoryName }) => {
    const [productData, setProductData] = useState(null);
    const [productData2, setProductData2] = useState(null);
    const [productData3, setProductData3] = useState(null);
    const [productData4, setProductData4] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://fakestoreapi.com/products/category/${categoryName}`);
                setProductData(response.data[1]);
                setProductData2(response.data[2]);
                setProductData3(response.data[3]);
                setProductData4(response.data[4]);
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
        <div className="flex flex-col items-center justify-center space-y-4 mt-[70px] bg-white shadow-2xl rounded-lg py-16 lg:w-11/12">
            <div className='font-extrabold text-[20px] mb-[30px] lg:pb-[50px] lg:text-[30px] lg:text-gray-600' >{productData.category.charAt(0).toUpperCase() + productData.category.slice(1)}</div>
            <div className='lg:flex lg:flex-row lg:justify-between'>
                <div className='lg:text-center lg:w-1/2'>
                    <div className='lg:flex lg:justify-center'>
                        <Link href={`/../../${productData.id}`}>
                            <Image src={productData.image} alt="Product image" height={400} width={400} className="rounded-lg lg:h-[400px] lg:w-auto " />
                        </Link>
                    </div>
                    <div className="text-lg font-bold">{productData.title}</div>
                    <div className="text-gray-700 font-bold">From ${productData.price}</div>
                </div>
                <div className='pt-[100px] lg:pt-[0px] lg:w-1/2 lg:text-center lg:ml-[150px]'>
                    <div className='lg:flex lg:justify-center'>
                        <Link href={`/../../${productData2.id}`}>
                            <Image src={productData2.image} alt="Product image" height={400} width={400} className="rounded-lg lg:h-[400px] lg:w-auto" />
                        </Link>
                    </div>
                    <div className="text-lg font-bold">{productData2.title}</div>
                    <div className="text-gray-700 font-bold">From ${productData2.price}</div>
                </div>
                <div className='pt-[100px] lg:pt-[0px] lg:w-1/2 lg:text-center lg:ml-[150px]'>
                    <div className='lg:flex lg:justify-center'>
                        <Link href={`/../../${productData3.id}`}>
                            <Image src={productData3.image} alt="Product image" height={400} width={400} className="rounded-lg lg:h-[400px] lg:w-auto" />
                        </Link>
                    </div>
                    <div className="text-lg font-bold">{productData3.title}</div>
                    <div className="text-gray-700 font-bold">From ${productData3.price}</div>
                </div>
                {/* <div className='pt-[100px] lg:pt-[0px] lg:w-1/2 lg:text-center lg:ml-[150px]'>
                    <div className='lg:flex lg:justify-center'>
                        <Link href={`/../../${productData4.id ? productData4.id : productData3.id}`}>
                            <Image src={productData4.image ? productData4.image : ''} alt="Product image" height={400} width={400} className="rounded-lg lg:h-[400px] lg:w-auto" />
                        </Link>
                    </div>
                    <div className="text-lg font-bold">{productData4.title}</div>
                    <div className="text-gray-700 font-bold">From ${productData4.price}</div>
                </div> */}
            </div>
        </div>
    );
};

export default SingleProduct;