import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import { ThemeProvider, StylesProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../theme';
import { PageTransition } from 'next-page-transitions';
// import NextSeo from 'next-seo';
import 'animate.css';

// const DEFAULT_SEO = {
//     title: 'StraD Home',
//     description: 'web site of Sho Tanaka who is hair artist and web programer ',
//     openGraph: {
//         type: 'website',
//         locale: 'ja-JP',
//         url: '',
//         title: 'Sho Tanaka',
//         description: 'web site of Sho Tanaka who is hair artist and web programer',
//         image:
//             'https://pbs.twimg.com/profile_images/1174902350248497157/Rz_j-35i_400x400.jpg',
//         site_name: 'StraD.inc',
//         imageWidth: 1200,
//         imageHeight: 1200,
//     },
//     twitter: {
//         handle: '@shoon75443247',
//         cardType: 'summary_large_image',
//     },
// };

class MyApp extends App {
    static async getInitialProps({ Component, router, ctx }) {
        let pageProps = {};

        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx);
        }

        return { pageProps };
    }

    componentDidMount() {
        // Remove the server-side injected CSS.
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles) {
            jssStyles.parentNode.removeChild(jssStyles);
        }
    }

    render() {
        const { Component, pageProps, router } = this.props;

        return (
            <>
                <Head>
                    <title>StraD.inc</title>
                </Head>
                <StylesProvider injectFirst>
                    <ThemeProvider theme={theme}>
                        <CssBaseline />
                        <PageTransition
                            timeout={100}
                            classNames="page-transition"
                        >
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
        );
    }
}

export default MyApp;
