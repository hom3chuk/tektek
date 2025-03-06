import { anyResourceUrlContains, DetectorResult, HAR } from "../../common/index.js"

const detectProtecht = (har: HAR, asap = true) => {
    const res: DetectorResult = {
        detected: false,
        name: 'Protecht',
        reasons: [],
    }

    if (anyResourceUrlContains(har, 'protechts.net')) {
        res.detected = true
        res.reasons.push('resource url contains protecht.net url')
        if (asap) {
            return res
        }
    }

    return res
}

export default detectProtecht
