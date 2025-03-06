import { anyResourceUrlContains, DetectorResult, HAR } from "../../common/index.js"

const detectGoogleFonts = (har: HAR, asap = true) => {
    const res: DetectorResult = {
        detected: false,
        name: 'Google Fonts',
        reasons: [],
    }

    if (anyResourceUrlContains(har, 'https://fonts.googleapis.com/')) {
        res.detected = true
        res.reasons.push('resource url contains google fonts url')
        if (asap) {
            return res
        }
    }

    if (anyResourceUrlContains(har, 'https://fonts.gstatic.com/')) {
        res.detected = true
        res.reasons.push('resource url contains google fonts static url')
        if (asap) {
            return res
        }
    }

    return res
}

export default detectGoogleFonts
