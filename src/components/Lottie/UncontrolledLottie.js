import React from 'react'
import Lottie from 'react-lottie'
import animationData from './lf30_editor_ImQRx0.json'
import one from './temporary/instagramBlue.json'
import three from './temporary/newspaperAnimation.json'
import seven from './temporary/postbox.json'
import eight from './temporary/programingMan.json'
import nine from './temporary/mail.json'

export default function UncontrolledLottie({ className }) {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: eight,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
    }

    return (
        <div
            className={className || 'lottie-icon'}
            style={{ filter: 'grayscale(90%)' }}
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
