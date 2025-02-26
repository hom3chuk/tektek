import { anyResourceUrlContains, DetectorResult, HAR } from "../../common/index.js"

const detectWPParsely = (har: HAR, asap = true) => {
    const res: DetectorResult = {
        detected: false,
        name: 'Google ReCAPTCHA',
        reasons: [],
    }

    if (anyResourceUrlContains(har, '/wp-content/plugins/wp-parsely/build/')) {
        res.detected = true
        res.reasons.push('resource url contains wp parsely plugin')
        if (asap) {
            return res
        }
    }

    return res
}

export default detectWPParsely
