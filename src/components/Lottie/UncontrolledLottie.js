import React from 'react'
import Lottie from 'react-lottie'
import animationData from './lf30_editor_ImQRx0.json'
import one from './temporary/instagramBlue.json'
import three from './temporary/newspaperAnimation.json'

export default function UncontrolledLottie({ className }) {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: three,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
    }

    return (
        <div
            className={className || 'lottie-icon'}
            style={{ filter: 'grayscale(70%)' }}
        >
            <Lottie
                options={defaultOptions}
                height={250}
                width={250}
                clickToPause={true}
            />
        </div>
    )
}
