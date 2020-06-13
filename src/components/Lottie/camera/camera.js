import React from 'react';
import Lottie from 'react-lottie';
import camera from './camera.json';

export default function LottieCamera() {
    const defaultOptions = {
        loop: false,
        autoplay: true,
        animationData: camera,
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
