import { DetectorResult, HAR, rootHeaderContains, rootHeaderExists } from "../../common/index.js"

const detectPHP = (har: HAR, asap = true) => {
    const res: DetectorResult = {
        detected: false,
        name: 'PHP',
        reasons: [],
    }

    if (rootHeaderContains(har, 'powered-by', 'php')) {
        res.detected = true
        res.reasons.push('powered-by header mentions php')
        if (asap) {
            return res
        }
    }

    if (rootHeaderExists(har, 'x-php-version')) {
        res.detected = true
        res.reasons.push('x-php-version header exists')
        if (asap) {
            return res
        }
    }

    return res
}

export default detectPHP
