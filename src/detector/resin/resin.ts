import { DetectorResult, HAR, rootHeaderContains } from "../../common/index.js"

const detectResin = (har: HAR, asap = true) => {
    const res: DetectorResult = {
        detected: false,
        name: 'Resin',
        reasons: [],
    }

    if (rootHeaderContains(har, 'server', 'resin')) {
        res.detected = true
        res.reasons.push('server header mentions resin')
        if (asap) {
            return res
        }
    }

    return res
}

export default detectResin
