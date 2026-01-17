import React, { useEffect, useState } from 'react';
import Header from '../../Header/Header';
import RightAsset from '../../homelayout/RightAsset';
import NewsDetail from './NewsDetail';
import { useLoaderData, useParams } from 'react-router';

const NewsDetails = () => {
    const data = useLoaderData();
    const { id } = useParams();
    const [news, setNews] = useState({});
    useEffect(() => {
        const newsDetails = data.find((singleNews) => singleNews.id === id);
        setNews(newsDetails);
    }, [data,id])

    return (
        <div>
            <header>
                <Header />
            </header>
            <main className='w-11/12 mx-auto grid grid-cols-12 gap-5 py-10'>
                <section className='col-span-12 sm:col-span-9'>
                    <h2 className='font-semibold text-[18px] sm:text-[20px]'>Dragon News</h2>
                    <NewsDetail news={news} />
                </section>
                <aside className='col-span-3 hidden sm:flex'>
                    <RightAsset />
                </aside>
            </main>
        </div>
    );
};

export default NewsDetails;