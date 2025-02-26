import { DetectorResult, HAR, rootHeaderContains } from "../../common/index.js"

const detectLiteSpeed = (har: HAR, asap = true) => {
    const res: DetectorResult = {
        detected: false,
        name: 'LiteSpeed',
        reasons: [],
    }

    if (rootHeaderContains(har, 'server', 'litespeed')) {
        res.detected = true
        res.reasons.push('server header mentions litespeed')
        if (asap) {
            return res
        }
    }

    return res
}

export default detectLiteSpeed
