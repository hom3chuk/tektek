import { anyResourceUrlContains, DetectorResult, HAR } from "../../common/index.js"

const detectTrustpilot = (har: HAR, asap = true) => {
    const res: DetectorResult = {
        detected: false,
        name: 'Trustpilot',
        reasons: [],
    }

    if (anyResourceUrlContains(har, 'https://widget.trustpilot.com')) {
        res.detected = true
        res.reasons.push('resource url contains trustpilot widget url')
        if (asap) {
            return res
        }
    }

    return res
}

export default detectTrustpilot
