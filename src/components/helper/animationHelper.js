import React from 'react'
import anime from 'animejs'

export const ImageAnimation = (line, element, lineHeight) => {
    anime
        .timeline({ loop: false })
        .add({
            targets: line,
            scaleY: [0, lineHeight],
            opacity: [0.5, 1],
            easing: 'easeOutExpo',
            duration: 700,
        })
        .add({
            targets: line,
            left: 0,
            width: '100%',
            easing: 'easeOutExpo',
            duration: 700,
            delay: 100,
        })
        .add({
            targets: line,
            right: 0,
            translateX: '100%',
            easing: 'easeOutExpo',
            duration: 700,
            delay: 100,
        })
        .add(
            {
                targets: element,
                opacity: [0, 1],
                easing: 'easeOutExpo',
                duration: 600,
            },
            '-=1000'
        )
        .add({
            targets: line,
            opacity: 0,
            duration: 1000,
            easing: 'easeOutExpo',
            delay: 1000,
        })
}
