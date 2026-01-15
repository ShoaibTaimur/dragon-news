import React from 'react';
import SocialLogin from './SocialLogin';
import Findus from '../Findus/Findus';
import Qzone from '../Qzone/Qzone';

const RightAsset = () => {
    return (
        <div className='space-y-3'>
            <SocialLogin />
            <Findus />
            <Qzone />
        </div>
    );
};

export default RightAsset;