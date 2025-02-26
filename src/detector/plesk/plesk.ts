import { DetectorResult, HAR, rootHeaderExists } from "../../common/index.js"

const detectPlesk = (har: HAR, asap = true) => {
    const res: DetectorResult = {
        detected: false,
        name: 'Plesk',
        reasons: [],
    }

    if (rootHeaderExists(har, 'x-powered-by-plesk')) {
        res.detected = true
        res.reasons.push('x-powered-by-plesk header exists')
        if (asap) {
            return res
        }
    }

    return res
}

export default detectPlesk
