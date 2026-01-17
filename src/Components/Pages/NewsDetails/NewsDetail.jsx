import React from 'react';
import { Link } from 'react-router';

const NewsDetail = ({ news }) => {
    const { title, image_url, details, category_id } = news;
    return (
        <div className='p-5 border border-gray-300 mt-5 rounded-lg space-y-3'>
            <img className='' src={image_url} alt="" />
            <h2 className='font-semibold sm:text-[20px]'>{title}</h2>
            <p className='text-[8px] sm:text-[12px] text-gray-500'>{details}</p>
            <Link to={`/category/${category_id}`} className='btn bg-red-300 text-[12px] sm:text-[16px]'>All categories</Link>
        </div>
    );
};

export default NewsDetail;