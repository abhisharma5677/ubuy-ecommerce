"use client"

import axios from 'axios';
import React from 'react';
import Image from 'next/image';

const page = async ({ params }) => {
    const detail = params.detail;
    const response = await axios.get(`https://fakestoreapi.com/products/${detail}`);
    const data = response.data;
    console.log(data);

    // Function for adding the product to cart
    function addToCart(pid, pname, price, quantity , image , rating) {
        console.log("function called...");

        if (typeof window !== 'undefined') {
            let cart = localStorage.getItem("cart");

            if (cart == null) {
                let products = [];
                let product = { productId: pid, productName: pname, productPrice: price, productQuantity: quantity , productImage: image , productRating: rating};
                products.push(product);
                localStorage.setItem("cart", JSON.stringify(products));
                console.log("data first time added to local storage");

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

                } else {
                    let product = { productId: pid, productName: pname, productPrice: price, productQuantity: quantity , productImage: image , productRating: rating};
                    pcart.push(product);
                    localStorage.setItem("cart", JSON.stringify(pcart));
                    console.log("more items added to local storage");

                }
            }
        }
    }

    return (
        <div className="max-w-xs mx-auto p-4 bg-white shadow-md rounded-lg mt-[20px] mb-[20px]">
            <div className="text-lg text-gray-700 font-bold flex justify-center">
                {data.category.charAt(0).toUpperCase() + data.category.slice(1)}
            </div>
            <Image src={data.image} alt='img' width={300} height={300} className="mt-4 mb-2" />
            <div className="text-md font-bold text-gray-600 flex justify-center pb-[20px]">{data.title}</div>
            <div className="text-xl font-bold text-green-800 flex justify-center">From ${data.price}</div>
            <div className="text-md font-bold text-gray-600 flex justify-center pb-[20px]">Rating: {data.rating.rate}</div>
            <div className="text-sm text-gray-700">{data.description}</div>
            <div className='flex justify-center' >
                <button
                    type='button'
                    className='mt-4 border border-green-800 bg-green-800 text-white font-bold py-2 px-4 rounded'
                    onClick={() => addToCart(data.id, data.title, data.price, 1 , data.image , data.rating.rate)}
                >
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

export default page;
