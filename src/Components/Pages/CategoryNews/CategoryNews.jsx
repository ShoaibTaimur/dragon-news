import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';

const CategoryNews = () => {
    const [news, setNews] = useState([]);
    const objId = useParams();
    const id = Number(objId.id);
    const data = useLoaderData();
    useEffect(() => {
        if (id === 0) {
            setNews(data);
            return;
        }
        else if (id === 1) {
            const mainData = data.filter(news => news.others.is_today_pick == true);
            setNews(mainData);
        }
        else {
            const mainData = data.filter(news => id === news.category_id);
            setNews(mainData);
        }

    }, [data, id])

    console.log(news);
    return (
        <div>
            CategoryNews- {news.length}
        </div>
    );
};

export default CategoryNews;