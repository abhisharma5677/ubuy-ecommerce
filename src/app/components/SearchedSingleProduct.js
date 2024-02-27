import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const SearchedSingleProduct = ({imageUrl , title , price , category , id}) => {
    return (
        <div className="flex flex-col items-center justify-center space-y-4 mt-[70px] bg-white shadow-2xl rounded-lg py-10 w-11/12 lg:w-4/5">
            {/* <div className='font-extrabold text-[20px] mb-[30px] ' >{category.charAt(0).toUpperCase() + category.slice(1)}</div> */}
            <div>
                <Link href={`/../../${id}`}>
                    <Image src={imageUrl} alt="Product image" height={400} width={400} className="rounded-lg" />
                </Link>
                <div className="text-lg text-gray-700 font-bold flex justify-center p-[20px]">{title}</div>
                <div className="text-gray-700 text-lg font-bold flex justify-center">From ${price}</div>
            </div>
        </div>
    )
}

export default SearchedSingleProduct 