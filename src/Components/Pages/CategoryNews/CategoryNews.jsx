import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import NewsCard from '../../NewsCard/NewsCard';

const CategoryNews = () => {
    const [categoryNews, setCategoryNews] = useState([]);
    const objId = useParams();
    const id = Number(objId.id);
    const data = useLoaderData();
    useEffect(() => {
        if (id === 0) {
            setCategoryNews(data);
            return;
        }
        else if (id === 1) {
            const mainData = data.filter(news => news.others.is_today_pick == true);
            setCategoryNews(mainData);
        }
        else {
            const mainData = data.filter(news => id === news.category_id);
            setCategoryNews(mainData);
        }

    }, [data, id])

    return (
        <div>
            <h2 className='font-semibold text-[11px] lg:text-[16px] mb-4'>Dragon news Home</h2>
            <div className='grid grid-cols-1 gap-5'>
                {
                    categoryNews.map(news=><NewsCard key={news.id} news={news}/>)
                }
            </div>
        </div>
    );
};

export default CategoryNews;