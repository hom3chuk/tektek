import { anyResourceUrlContains, DetectorResult, HAR } from "../../common/index.js"

const detectKlaviyo = (har: HAR, asap = true) => {
    const res: DetectorResult = {
        detected: false,
        name: 'Klaviyo',
        reasons: [],
    }

    if (anyResourceUrlContains(har, 'https://static.klaviyo.com/')) {
        res.detected = true
        res.reasons.push('resource url contains klaviyo static url')
        if (asap) {
            return res
        }
    }

    return res
}

export default detectKlaviyo
