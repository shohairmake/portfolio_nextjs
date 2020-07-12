import * as React from 'react'
import anime from 'animejs'
import VizSensor from 'react-visibility-sensor'
import PropTypes from 'prop-types'

export const ImageAnimation = (
    line: string,
    element: string,
    lineHeight: number,
    delay: number
) => {
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
type ImageAnimationWrapperProps = {
    color: string
    width: string
    height: string
    children: React.ReactNode
}

export const ImageAnimationWrapper: React.FC<ImageAnimationWrapperProps> = ({
    color,
    width,
    height,
    children,
}) => (
    <div
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

type VisibleContainerProps = {
    state: Boolean
    setState: (state: boolean) => void
    children: React.ReactNode
    animeClass?: string
}

export const VisibleContainer: React.FC<VisibleContainerProps> = ({
    state,
    setState,
    children,
    animeClass,
}) => (
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

export const svgAnimation = () => {
    anime({
        targets: '.svg-icon .pass',
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInOutSine',
        duration: 1000,
        fill: ['rgba(0,0,0,0)', '#000'],
        delay: function (el, i) {
            return i * 500
        },
    })
}

ImageAnimation.propTypes = {
    line: PropTypes.string.isRequired,
    element: PropTypes.string.isRequired,
    lineHeight: PropTypes.string.isRequired,
    delay: PropTypes.string.isRequired,
}

ImageAnimationWrapper.propTypes = {
    color: PropTypes.string.isRequired,
    width: PropTypes.string.isRequired,
    height: PropTypes.string.isRequired,
    children: PropTypes.object.isRequired,
}

VisibleContainer.propTypes = {
    state: PropTypes.bool.isRequired,
    setState: PropTypes.func.isRequired,
    children: PropTypes.object.isRequired,
}
