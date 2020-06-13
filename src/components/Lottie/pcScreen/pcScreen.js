import React from 'react';
import Lottie from 'react-lottie';
import screenAndTriangle from './screenAndTriangle.json';

export default function pcScreen() {
    const defaultOptions = {
        loop: false,
        autoplay: false,
        animationData: screenAndTriangle,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
    };

    return (
        <div>
            <Lottie
                options={defaultOptions}
                height={60}
                width={40}
                clickToPause={true}
            />
        </div>
    );
}
