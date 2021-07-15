import React from 'react'
import Head from 'next/head'
import { ThemeProvider, StylesProvider } from '@material-ui/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import theme from '../theme'
import { PageTransition } from 'next-page-transitions'
import { DefaultSeo } from 'next-seo'
import seoConfig from '../../next-seo.config'
import PropTypes from 'prop-types'
import * as gtag from '../lib/gtag'
import 'animate.css'

const DEFAULT_SEO = () => (
    <DefaultSeo
        title="StraD Home"
        description="web site of Sho Tanaka who is hair artist and web programer "
        keywords="hair make,hair Style,programing,react,next.js,"
        {...seoConfig}
    />
)

export default function StradApp({ Component, pageProps, router }) {
    const pathName = router.pathname

    React.useEffect(() => {
        // Remove the server-side injected CSS.
        const jssStyles = document.querySelector('#jss-server-side')
        if (jssStyles) {
            jssStyles.parentNode.removeChild(jssStyles)
        }
    }, [])

    React.useEffect(() => {
        const handleRouteChange = (url) => {
            gtag.pageview(url)
        }
        router.events.on('routeChangeComplete', handleRouteChange)
        return () => {
            router.events.off('routeChangeComplete', handleRouteChange)
        }
    }, [router.events])

    React.useEffect(() => {
        window.dataLayer = window.dataLayer || []
        window.dataLayer.push({ event: 'optimize.activate' })
    }, [pathName])

    return (
        <>
            <Head>
                <DEFAULT_SEO />
                <title>StraD inc.</title>
            </Head>
            <StylesProvider injectFirst>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <PageTransition timeout={100} classNames="page-transition">
                        <Component {...pageProps} key={router.route} />
                    </PageTransition>
                    <style jsx global>{`
                        .page-transition-enter {
                            opacity: 0;
                        }
                        .page-transition-enter-active {
                            opacity: 1;
                            transition: opacity 200ms;
                        }
                        .page-transition-exit {
                            opacity: 1;
                        }
                        .page-transition-exit-active {
                            opacity: 0;
                            transition: opacity 200ms;
                        }
                    `}</style>
                </ThemeProvider>
            </StylesProvider>
        </>
    )
}

StradApp.propTypes = {
    Component: PropTypes.func.isRequired,
    pageProps: PropTypes.object.isRequired,
    router: PropTypes.object.isRequired,
}
