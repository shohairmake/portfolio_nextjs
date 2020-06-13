import React from 'react'
import Lottie from 'react-lottie'
import animationData from './lf30_editor_ImQRx0.json'
import one from './temporary/instagramBlue.json'
import three from './temporary/newspaperAnimation.json'
import seven from './temporary/postbox.json'

export default function UncontrolledLottie() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: seven,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
    }

    return (
        <div>
            <Lottie
                options={defaultOptions}
                height={400}
                width={400}
                clickToPause={true}
            />
        </div>
    )
}
