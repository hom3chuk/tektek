import { anyResourceUrlContains, DetectorResult, HAR } from "../../common/index.js"

const detectGoogleReCAPTCHA = (har: HAR, asap = true) => {
    const res: DetectorResult = {
        detected: false,
        name: 'Google ReCAPTCHA',
        reasons: [],
    }

    if (anyResourceUrlContains(har, 'https://www.google.com/recaptcha/api.js')) {
        res.detected = true
        res.reasons.push('resource url contains recaptcha url')
        if (asap) {
            return res
        }
    }

    return res
}

export default detectGoogleReCAPTCHA
