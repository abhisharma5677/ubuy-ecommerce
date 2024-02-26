import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation';

const SingleCartItem = ({ name, price, quantity, image, rating, cartArray, pid }) => {

    const router = useRouter();

    function handleClick() {
        console.log(cartArray);
        const updatedArray = cartArray.filter(item => item.productId !== pid);
        localStorage.setItem("cart", JSON.stringify(updatedArray));
        console.log(updatedArray);

        router.push('/');
    }

    function handleNegative(){
        console.log("handle negative trigerred");
    }

    function handlePositive(){
        console.log("handle positive trigerred");
    }

    return (
        <div className='flex justify-center'>
            <div className='border w-11/12 shadow-md mt-[10px] p-[10px]'>
                <div className='flex mb-4'>
                    <div className="flex-shrink-0">
                        <Image src={image} alt='img' width={100} height={100} />
                        <div className="mt-1">
                            <button type='button' className="bg-gray-200 px-2 py-1 rounded-md" onClick={handleNegative}>-</button>
                            <span className="mx-2">{quantity}</span>
                            <button type='button' className="bg-gray-200 px-2 py-1 rounded-md" onClick={handlePositive}>+</button>
                        </div>
                    </div>
                    <div className="ml-4">
                        <div className="font-bold">{name}</div>
                        <div className="text-sm text-gray-500">{rating}</div>
                        <div className="text-gray-500 font-bold mt-[10px] mb-[10px]">From ${price}</div>
                        <button type='button' onClick={handleClick} className="mt-2 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-900 font-bold">Remove</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleCartItem