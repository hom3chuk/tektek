import { anyResourceUrlContains, DetectorResult, HAR } from "../../common/index.js"

const detectGoogleAnalytics = (har: HAR, asap = true) => {
    const res: DetectorResult = {
        detected: false,
        name: 'Google Analytics',
        reasons: [],
    }

    if (anyResourceUrlContains(har, 'https://www.google-analytics.com')) {
        res.detected = true
        res.reasons.push('resource url contains ga url')
        if (asap) {
            return res
        }
    }

    return res
}

export default detectGoogleAnalytics
