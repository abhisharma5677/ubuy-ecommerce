import axios from 'axios';
import React, { useState, useEffect } from 'react';
import SingleProduct from './SingleProduct';

const Products = () => {
    const [categoryArr, setCategoryArr] = useState([]);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const categoryResponse = await axios.get('https://fakestoreapi.com/products/categories');
                categoryResponse.data.reverse();   
                setCategoryArr(categoryResponse.data);
            } catch (error) {
                console.error('Error fetching categories:', error);
            }
        };

        fetchCategories();
    }, []); // Empty dependency array to run the effect only once on component mount



    return (
        <div className="flex flex-wrap justify-center">
            {categoryArr.map((item, index) => (
                <SingleProduct key={index} categoryName={item} imageClassName="h-40 w-40" />
            ))}
        </div>
    );
};

export default Products;