import { useEffect } from 'react'
import { pageview, GA_TRACKING_ID } from '../lib/gtag'

export default function usePageView(router) {
    useEffect(() => {
        if (GA_TRACKING_ID) {
            return
        }

        const handleRouteChange = (path) => {
            pageview(path)
        }

        router.events.on('routeChangeComplete', handleRouteChange)
        return () => {
            router.events.off('routeChangeComplete', handleRouteChange)
        }
    }, [router.events])
}
