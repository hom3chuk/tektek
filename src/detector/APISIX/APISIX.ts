import { DetectorResult, HAR, rootHeaderContains } from "../../common/index.js"

const detectAPISIX = (har: HAR, asap = true) => {
    const res: DetectorResult = {
        detected: false,
        name: 'APISIX',
        reasons: [],
    }

    if (rootHeaderContains(har, 'server', 'apisix')) {
        res.detected = true
        res.reasons.push('server header mentions apisix')
        if (asap) {
            return res
        }
    }

    return res
}

export default detectAPISIX
