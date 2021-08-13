// lib/gtag.ts
export const GA_TRACKING_ID = 'UA-120513195-2'
export const OPT_TRACKING_ID = 'OPT-NKMN2C8'

export const pageview = (url) => {
    window.gtag('config', GA_TRACKING_ID, {
        page_path: url,
    })
}

export const event = ({ action, category, label, value }) => {
    window.gtag('event', action, {
        event_category: category,
        event_label: JSON.stringify(label),
        value,
    })
}
