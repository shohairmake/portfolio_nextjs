import React from 'react'
import Lottie from 'react-lottie'
import programingMan from './programingMan.json'

export default function ProgramingMan() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: programingMan,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
    }

    return (
        <div className="lottie-icon" style={{ filter: 'grayscale(90%)' }}>
            <Lottie
                options={defaultOptions}
                height={250}
                width={250}
                clickToPause={true}
            />
        </div>
    )
}
