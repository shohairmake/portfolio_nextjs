import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheets } from '@material-ui/styles'
import theme from '../theme'

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const materialSheets = new ServerStyleSheets()
        const originalRenderPage = ctx.renderPage

        try {
            ctx.renderPage = () =>
                originalRenderPage({
                    enhanceApp: (App) => (props) =>
                        materialSheets.collect(<App {...props} />),
                })
            const initialProps = await Document.getInitialProps(ctx)
            return {
                ...initialProps,
                styles: (
                    <React.Fragment>
                        {initialProps.styles}
                        {materialSheets.getStyleElement()}
                    </React.Fragment>
                ),
            }
        } catch (e) {
            console.log('error', e)
        }
    }

    render() {
        return (
            <html lang="en" dir="ltr">
                <Head>
                    <meta charSet="utf-8" />
                    {/* Use minimum-scale=1 to enable GPU rasterization */}
                    <meta
                        name="viewport"
                        content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
                    />
                    {/* PWA primary color */}
                    <meta
                        name="theme-color"
                        content={theme.palette.primary.main}
                    />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Balsamiq+Sans:wght@400;700&family=Kumar+One+Outline&family=Londrina+Outline&family=MuseoModerno:wght@400;500;600;700;800;900&family=Roboto:wght@300;400;500;700&display=swap"
                        rel="stylesheet"
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </html>
        )
    }
}

export default MyDocument
