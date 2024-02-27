"use client"

import axios from 'axios';
import React from 'react';
import Image from 'next/image';
// import { useRouter } from 'next/navigation';

const page = async ({ params }) => {
    const detail = params.detail;
    const response = await axios.get(`https://fakestoreapi.com/products/${detail}`);
    const data = response.data;
    console.log(data);
    // const router = useRouter();

    // Function for adding the product to cart
    function addToCart(pid, pname, price, quantity, image, rating) {
        console.log("function called...");

        if (typeof window !== 'undefined') {
            let cart = localStorage.getItem("cart");

            if (cart == null) {
                let products = [];
                let product = { productId: pid, productName: pname, productPrice: price, productQuantity: quantity, productImage: image, productRating: rating };
                products.push(product);
                localStorage.setItem("cart", JSON.stringify(products));
                console.log("data first time added to local storage");
                // router.push('/cart');

            } else {
                let pcart = [];
                if (cart) {
                    try {
                        pcart = JSON.parse(cart);
                        // Use pcart as needed
                    } catch (error) {
                        console.error("Error parsing cart data from localStorage:", error);
                        // Handle the error appropriately
                    }
                }

                let oldProduct = pcart.find((item) => item.productId == pid);

                if (oldProduct) {
                    pcart.forEach((element) => {
                        if (element.productId === oldProduct.productId) {
                            element.productQuantity = oldProduct.productQuantity + 1;
                        }
                    });

                    localStorage.setItem("cart", JSON.stringify(pcart));
                    console.log("quantity of particular item is increased");
                    // router.push('/cart');

                } else {
                    let product = { productId: pid, productName: pname, productPrice: price, productQuantity: quantity, productImage: image, productRating: rating };
                    pcart.push(product);
                    localStorage.setItem("cart", JSON.stringify(pcart));
                    console.log("more items added to local storage");
                    // router.push('/cart')

                }
            }
        }
    }

    return (
        <div className="sm:w-2/5 border mx-auto p-4 bg-white shadow-md rounded-lg ml-[10px] mr-[10px] mt-[20px] mb-[20px] lg:w-4/5 lg:mt-[30px] lg:ml-auto lg:mr-auto">
            <div className="text-lg text-gray-700 font-bold flex justify-center lg:mb-[45px] lg:mt-[20px] lg:text-[35px]">
                {data.category.charAt(0).toUpperCase() + data.category.slice(1)}
            </div>
            <div className='lg:flex lg:flex-row lg:justify-evenly'>
                <div className='w-400px lg:w-1/4 lg:pl-1/6'>
                    <div className='flex justify-center'>
                        <Image src={data.image} alt='img' width={300} height={300} className="mt-4 mb-2 lg:w-[500px] lg:h-[500px]" />
                    </div>
                    <div className="text-md font-bold text-gray-600 flex justify-center pb-[20px]">{data.title}</div>
                </div>
                <div className='lg:w-1/3 lg:ml-1/6'>
                    <div className="text-xl font-bold text-green-800 flex justify-center lg:text-[30px] lg:mb-[15px] lg:mt-[70px]">From ${data.price}</div>
                    <div className="text-md font-bold text-gray-600 flex justify-center pb-[20px] lg:text-[20px]">Rating: {data.rating.rate}</div>
                    <div className="text-sm text-gray-700 lg:text-[20px] lg:mb-[35px]">{data.description}</div>
                    <div className='flex justify-center' >
                        <button
                            type='button'
                            className='mt-4 border border-green-800 bg-green-800 text-white font-bold py-2 px-4 rounded'
                            onClick={() => addToCart(data.id, data.title, data.price, 1, data.image, data.rating.rate)}
                        >
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default page;

