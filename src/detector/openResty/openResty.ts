import { DetectorResult, HAR, rootHeaderContains } from "../../common/index.js"

const detectOpenResty = (har: HAR, asap = true) => {
    const res: DetectorResult = {
        detected: false,
        name: 'OpenResty',
        reasons: [],
    }

    if (rootHeaderContains(har, 'server', 'openresty')) {
        res.detected = true
        res.reasons.push('server header mentions openresty')
        if (asap) {
            return res
        }
    }

    return res
}

export default detectOpenResty
