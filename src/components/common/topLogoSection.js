import React from 'react'
import aboutLogo from '../../../public/static/img/ABOUT.png'
import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import workLogo from '../../../public/static/img/WORK.png'
import contactLogo from '../../../public/static/img/CONTACT.png'
import blogLogo from '../../../public/static/img/BLOG.png'

const TopLogoSection = ({ logo, alt, isContactClassName }) => {
    const classes = useStyles()
    return (
        <Grid className={classes.gap}>
            <Grid>
                <img
                    className={
                        isContactClassName
                            ? classes.ContactImgLogo
                            : classes.imgLogo
                    }
                    src={logo}
                    alt={alt}
                />
                <hr />
            </Grid>
        </Grid>
    )
}

export const BlogLogo = () => (
    <TopLogoSection
        alt="blog_logo"
        logo={blogLogo}
        isContactClassName={false}
    />
)

export const WorkLogo = () => (
    <TopLogoSection
        alt="work_logo"
        logo={workLogo}
        isContactClassName={false}
    />
)

export const AboutLogo = () => (
    <TopLogoSection
        alt="about_logo"
        logo={aboutLogo}
        isContactClassName={false}
    />
)

export const ContactLogo = () => (
    <TopLogoSection
        alt="contact_logo"
        logo={contactLogo}
        isContactClassName={true}
    />
)

const useStyles = makeStyles({
    gap: {
        width: '100%',
        height: '13rem',
        display: 'table',
        textAlign: 'center',
        '@media (max-width:600px)': {
            height: '8rem',
        },
        '& div': {
            display: 'table-cell',
            verticalAlign: 'middle',
            '& img': {
                zIndex: 1,
                position: 'relative',
                opacity: 0.7,
                animation:
                    '$fade-in-top 1s cubic-bezier(0.390, 0.575, 0.565, 1.000) both',
            },
            '& hr': {
                width: '100%',
                height: '1.5em',
                backgroundColor: '#fff',
                borderWidth: 'inherit',
                borderStyle: 'none',
                transform: 'translateY(-60px)',
                zIndex: 0,
                opacity: 0.7,
                '@media (max-width:600px)': {
                    height: '1em',
                    transform: 'translateY(-50px)',
                },
            },
        },
    },
    imgLogo: {
        width: '14em',
        height: 'auto',
        '@media (max-width:600px)': {
            width: '11em',
        },
    },
    ContactImgLogo: {
        width: '18em',
        height: 'auto',
        '@media (max-width:600px)': {
            width: '13em',
        },
    },
    '@keyframes fade-in-top': {
        '0%': {
            transform: 'translateY(-30px)',
            opacity: 0,
        },
        '100%': {
            transform: 'translateY(0)',
            opacity: 0.7,
        },
    },
})
