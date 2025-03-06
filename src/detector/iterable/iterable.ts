import { anyResourceUrlContains, DetectorResult, HAR } from "../../common/index.js"

const detectIterable = (har: HAR, asap = true) => {
    const res: DetectorResult = {
        detected: false,
        name: 'Iterable',
        reasons: [],
    }

    if (anyResourceUrlContains(har, 'iterable.com')) {
        res.detected = true
        res.reasons.push('resource url contains iterable url')
        if (asap) {
            return res
        }
    }

    return res
}

export default detectIterable
