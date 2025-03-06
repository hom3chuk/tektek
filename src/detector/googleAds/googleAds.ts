import { anyResourceUrlContains, DetectorResult, HAR } from "../../common/index.js"

const detectGoogleAds = (har: HAR, asap = true) => {
    const res: DetectorResult = {
        detected: false,
        name: 'Google Ads',
        reasons: [],
    }

    if (anyResourceUrlContains(har, 'googlesyndication.com/tag/js/gpt.js')) {
        res.detected = true
        res.reasons.push('resource url contains google ads js url')
        if (asap) {
            return res
        }
    }

    if (anyResourceUrlContains(har, 'doubleclick.net')) {
        res.detected = true
        res.reasons.push('resource url contains doubleclick url')
        if (asap) {
            return res
        }
    }

    return res
}

export default detectGoogleAds
