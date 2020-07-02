import React from 'react'
import Lottie from 'react-lottie'
import mail from './mail.json'
import PropTypes from 'prop-types'

export default function lottieMail({ className }) {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: mail,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
    }

    return (
        <div className={className || 'lottie-icon'}>
            <Lottie
                options={defaultOptions}
                height={250}
                width={250}
                clickToPause={true}
            />
        </div>
    )
}

lottieMail.prototypes = {
    className: PropTypes.string.isRequired,
}
