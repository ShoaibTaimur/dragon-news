import React, { use, useState } from 'react';
import { NavLink } from 'react-router';

const categoryPromise = fetch("/categories.json")
    .then(res => res.json());

const Categories = () => {
    const categories = use(categoryPromise);
    const [activeCategoryId, setActiveCategoryId] = useState(null);


    return (
        <div>
            <h2 className='font-semibold'>All Categories {categories.length}</h2>
            <div className='grid grid-cols-1 mt-3 gap-2'>
                {
                    categories?.map(category => (
                        <NavLink to={`/category/${category.id}`}
                            className={`btn border-none transition text-[16px] font-semibold ${activeCategoryId === category.id
                                ? "bg-base-200 text-primary" : "bg-base-100 hover:bg-base-200"
                                }`}
                            key={category.id}
                            onClick={() => setActiveCategoryId(category.id)}
                        >
                            {category?.name}
                        </NavLink>
                    ))
                }
            </div>
        </div>
    );
};

export default Categories;
