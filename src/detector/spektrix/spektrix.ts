import { anyResourceUrlContains, DetectorResult, HAR } from "../../common/index.js"

const detectSpektrix = (har: HAR, asap = true) => {
    const res: DetectorResult = {
        detected: false,
        name: 'Spektrix',
        reasons: [],
    }

    if (anyResourceUrlContains(har, 'spektrix.com')) {
        res.detected = true
        res.reasons.push('resource url contains spektrix url')
        if (asap) {
            return res
        }
    }

    return res
}

export default detectSpektrix
