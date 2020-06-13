import React from 'react'
import Lottie from 'react-lottie'
import noteAndPen from './noteAndPen.json'

export default function LottieNoteAndPen() {
    const defaultOptions = {
        loop: false,
        autoplay: false,
        animationData: noteAndPen,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
    }

    return (
        <div>
            <Lottie
                options={defaultOptions}
                height={60}
                width={40}
                clickToPause={true}
            />
        </div>
    )
}
