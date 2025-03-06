import { anyResourceUrlContains, DetectorResult, HAR } from "../../common/index.js"

const detectAdobeFonts = (har: HAR, asap = true) => {
    const res: DetectorResult = {
        detected: false,
        name: 'Adobe Fonts',
        reasons: [],
    }

    if (anyResourceUrlContains(har, 'https://use.typekit.net/')) {
        res.detected = true
        res.reasons.push('resource url contains typekit url')
        if (asap) {
            return res
        }
    }

    return res
}

export default detectAdobeFonts
