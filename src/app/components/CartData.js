"use client"

import React, { useState, useEffect } from 'react';
import SingleCartItem from './SingleCartItem';

const CartData = () => {
    const [cartArr, setCartArr] = useState([]);
    const [sum, setSum] = useState(0);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            let strArr = localStorage.getItem('cart');
            let arr = [];
            if (strArr) {
                try {
                    arr = JSON.parse(strArr);
                } catch (error) {
                    console.error("Error parsing cart data from localStorage:", error);
                    // Handle the error appropriately
                }
            }

            setCartArr(arr);
        }
    }, []); // Empty dependency array ensures this effect runs only once on mount


    useEffect(() => {
        const sumValue = cartArr.reduce((accumulator, item) => {
            return accumulator + item.productPrice * item.productQuantity;
        }, 0);

        const roundedNum = sumValue.toFixed(2);

        setSum(roundedNum);
    }, [cartArr]);


    return (
        <div className='lg:flex lg:justify-center'>
            <div className='lg:flex lg:w-4/5 lg:justify-evenly'>
                <div>
                    {cartArr.map((item, index) => ( // Added key prop to resolve React warning
                        <div key={index}>
                            <SingleCartItem name={item.productName} price={item.productPrice} quantity={item.productQuantity} image={item.productImage} cartArray={cartArr} pid={item.productId} />
                        </div>
                    ))}
                </div>
                <div className='flex justify-center mt-[10px] mb-[10px] '>
                    <div className='border w-11/12'>
                        <div className="flex justify-between items-center mt-[5px] mb-[5px] ml-[10px] mr-[10px] lg:mt-[20px]">
                            <div className="text-lg font-bold">Total: ${sum}</div>
                            <button className="px-4 py-2 font-bold bg-blue-500 text-white rounded-md hover:bg-blue-600">Checkout</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartData;
