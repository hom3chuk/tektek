import { anyResourceUrlContains, DetectorResult, HAR } from "../../common/index.js"

const detectUsercentricsCookiebot = (har: HAR, asap = true) => {
    const res: DetectorResult = {
        detected: false,
        name: 'Usercentrics Cookiebot',
        reasons: [],
    }

    if (anyResourceUrlContains(har, 'cookiebot.com/')) {
        res.detected = true
        res.reasons.push('resource url contains cookiebot url')
        if (asap) {
            return res
        }
    }

    return res
}

export default detectUsercentricsCookiebot
