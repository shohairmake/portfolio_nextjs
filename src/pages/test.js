import React from 'react';

const converted = {
    '#nav-icon4': {
        width: '60px',
        height: '45px',
        position: 'relative',
        margin: '50px auto',
        WebkitTransform: 'rotate(0deg)',
        MozTransform: 'rotate(0deg)',
        OTransform: 'rotate(0deg)',
        transform: 'rotate(0deg)',
        WebkitTransition: '.5s ease-in-out',
        MozTransition: '.5s ease-in-out',
        OTransition: '.5s ease-in-out',
        transition: '.5s ease-in-out',
        cursor: 'pointer',
    },
    '#nav-icon4 span': {
        display: 'block',
        position: 'absolute',
        height: '9px',
        width: '100%',
        background: '#d3531a',
        borderRadius: '9px',
        opacity: '1',
        left: '0',
        WebkitTransform: 'rotate(0deg)',
        MozTransform: 'rotate(0deg)',
        OTransform: 'rotate(0deg)',
        transform: 'rotate(0deg)',
        WebkitTransition: '.25s ease-in-out',
        MozTransition: '.25s ease-in-out',
        OTransition: '.25s ease-in-out',
        transition: '.25s ease-in-out',
    },
    '#nav-icon4 span:nth-child(1)': {
        top: '0px',
        WebkitTransformOrigin: 'left center',
        MozTransformOrigin: 'left center',
        OTransformOrigin: 'left center',
        transformOrigin: 'left center',
    },
    '#nav-icon4 span:nth-child(2)': {
        top: '18px',
        WebkitTransformOrigin: 'left center',
        MozTransformOrigin: 'left center',
        OTransformOrigin: 'left center',
        transformOrigin: 'left center',
    },
    '#nav-icon4 span:nth-child(3)': {
        top: '36px',
        WebkitTransformOrigin: 'left center',
        MozTransformOrigin: 'left center',
        OTransformOrigin: 'left center',
        transformOrigin: 'left center',
    },
    '#nav-icon4.open span:nth-child(1)': {
        WebkitTransform: 'rotate(45deg)',
        MozTransform: 'rotate(45deg)',
        OTransform: 'rotate(45deg)',
        transform: 'rotate(45deg)',
        top: '-3px',
        left: '8px',
    },
    '#nav-icon4.open span:nth-child(2)': { width: '0%', opacity: '0' },
    '#nav-icon4.open span:nth-child(3)': {
        WebkitTransform: 'rotate(-45deg)',
        MozTransform: 'rotate(-45deg)',
        OTransform: 'rotate(-45deg)',
        transform: 'rotate(-45deg)',
        top: '39px',
        left: '8px',
    },
};

function IndexHeader() {
    return (
        <>
            <div className="page-header clear-filter" filter-color="blue">
                <converted>
                    <div id="nav-icon4">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </converted>
            </div>
        </>
    );
}

export default IndexHeader;
