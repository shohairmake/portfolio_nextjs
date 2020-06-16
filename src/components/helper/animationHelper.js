import React from 'react'
import anime from 'animejs'
import VizSensor from 'react-visibility-sensor'

export const ImageAnimation = (line, element, lineHeight, delay) => {
    anime
        .timeline({ loop: false })
        .add({
            targets: line,
            scaleY: [0, lineHeight],
            opacity: [0.5, 1],
            easing: 'easeOutExpo',
            duration: 700,
            delay: delay,
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

export const ImageAnimationWrapper = ({ color, width, height, children }) => (
    <div
        className
        style={{
            position: 'relative',
            overflow: 'hidden',
            width: width,
            height: height,
        }}
    >
        <span
            className={'line'}
            style={{
                opacity: 0,
                position: 'absolute',
                left: 0,
                height: '100%',
                width: '5px',
                backgroundColor: color,
                transformOrigin: '0 50%',
                zIndex: 100,
            }}
        ></span>
        <div className={'element'}>{children}</div>
    </div>
)

export const VisibleContainer = ({ state, setState, children, animeClass }) => (
    <VizSensor
        partialVisibility
        active={!state}
        onChange={(state) => {
            setState(state)
        }}
    >
        <div className={state ? animeClass : ''}>{children}</div>
    </VizSensor>
)
