import { anyResourceUrlContains, DetectorResult, HAR } from "../../common/index.js"

const detectRefersion = (har: HAR, asap = true) => {
    const res: DetectorResult = {
        detected: false,
        name: 'Refersion',
        reasons: [],
    }

    if (anyResourceUrlContains(har, 'https://cdn.refersion.com/refersion.js')) {
        res.detected = true
        res.reasons.push('resource url contains refersion js url')
        if (asap) {
            return res
        }
    }

    return res
}

export default detectRefersion
