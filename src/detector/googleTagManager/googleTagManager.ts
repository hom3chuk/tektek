import { anyResourceUrlContains, DetectorResult, HAR } from "../../common/index.js"

const detectGoogleTagManager = (har: HAR, asap = true) => {
    const res: DetectorResult = {
        detected: false,
        name: 'Google Tag Manager',
        reasons: [],
    }

    if (anyResourceUrlContains(har, 'www.googletagmanager.com/gtag/js')) {
        res.detected = true
        res.reasons.push('resource url contains gtm url')
        if (asap) {
            return res
        }
    }

    return res
}

export default detectGoogleTagManager
