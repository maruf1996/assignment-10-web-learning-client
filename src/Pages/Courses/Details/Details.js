import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Detail from '../Detail/Detail';

const Details = () => {
    const details=useLoaderData();

    return (
        <div className='my-4'>
            <h2 className='text-center mt-2 mb-4'>WelCome Our Course</h2>
            {
                details.map(detail=><Detail
                    key={detail.id}
                    detail={detail}
                ></Detail>)
            }
        </div>
    );
};

export default Details;