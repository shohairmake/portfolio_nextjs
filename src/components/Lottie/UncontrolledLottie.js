import React from 'react';
import Lottie from 'react-lottie';
import animationData from './lf30_editor_ImQRx0.json';

export default function UncontrolledLottie() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
    };

    return (
        <div>
            <Lottie options={defaultOptions} height={400} width={400} />
        </div>
    );
}
