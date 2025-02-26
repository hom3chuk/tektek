import { DetectorResult, HAR, rootAnyHeaderContains, rootHeaderContains } from "../../common/index.js"

const detectHostinger = (har: HAR, asap = true) => {
    const res: DetectorResult = {
        detected: false,
        name: 'Hostinger',
        reasons: [],
    }

    if (rootHeaderContains(har, 'platform', 'hostinger')) {
        res.detected = true
        res.reasons.push('platform header mentions hostinger')
        if (asap) {
            return res
        }
    }

    return res
}

export default detectHostinger
