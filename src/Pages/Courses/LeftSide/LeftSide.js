import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSide = () => {
    const [categories,setCategories]=useState([]);

    useEffect(()=>{
        fetch('https://web-learning-server-psi.vercel.app/categories')
        .then(res=>res.json())
        .then(data=>setCategories(data))
    },[]);

    return (
        <div>
            <div className="">
            <h6>Start Learning</h6>
            <h2>Popular Courses</h2>
            </div>
            <div className="mt-4">
            {
                categories.map(category=><Link
                to={`/category/${category.id}`}
                className='text-decoration-none d-block mt-3 border border-2 p-2 fs-5'
                key={category.id}
                >{category.name}</Link>)
            }
            </div>
        </div>
    );
};

export default LeftSide;