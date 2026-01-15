import React, { useState } from 'react';
import { BsSave } from 'react-icons/bs';
import { CiShare2 } from 'react-icons/ci';
import { FaEye } from 'react-icons/fa';
import { FcRating } from 'react-icons/fc';

const NewsCard = ({news}) => {
    const [expanded, setExpanded] = useState(false);

    const {title,author,thumbnail_url,details,rating,total_view}=news;
    const maxPreviewLength = 200;
    const hasLongDetails = typeof details === 'string' && details.length > maxPreviewLength;
    const visibleDetails = hasLongDetails && !expanded
        ? `${details.slice(0, maxPreviewLength)}...`
        : details;

    return (
        <div className='border border-gray-200 shadow-md'>
            <div className='flex items-center gap-5 bg-base-200 p-2 rounded-lg'>
                <div className='w-[15%] flex justify-center'>
                    <img className='w-7 lg:w-10 rounded-full' src={author.img} alt="" />
                </div>
                <div className='w-[70%]'>
                    <p className='font-semibold text-[12px] lg:text-[14px]'>{author.name}</p>
                    <p className='text-[10px] lg:text-[12px] text-accent'>{author.published_date}</p>
                </div>
                <div className='w-[15%] flex justify-end gap-3'>
                    <BsSave />
                    <CiShare2 />
                </div>
            </div>
            <div className='m-2 space-y-3'>
                <h1 className='font-bold text-[16px] lg:text-[20px]'>{title}</h1>
                <img className='rounded-lg' src={thumbnail_url} alt="" />
                <p className='text-[12px] lg:text-[16px]'>{visibleDetails}</p>
                {hasLongDetails && (
                    <button
                        className='text-amber-600 text-sm font-semibold mt-2'
                        onClick={() => setExpanded((prev) => !prev)}
                        type='button'
                    >
                        {expanded ? 'Read less' : 'Read more...'}
                    </button>
                )}
                <div className='border border-dashed border-gray-300'></div>
                <div className='flex justify-between'>
                    <p className='flex items-center gap-1'><FcRating /> {rating.number}</p>
                    <p className='flex items-center gap-2'><FaEye />{total_view}</p>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;
