import { DetectorResult, HAR, rootHeaderContains } from "../../common/index.js"

const detectPagely = (har: HAR, asap = true) => {
    const res: DetectorResult = {
        detected: false,
        name: 'Pagely',
        reasons: [],
    }

    if (rootHeaderContains(har, 'server', 'pagely')) {
        res.detected = true
        res.reasons.push('server header mentions pagely')
        if (asap) {
            return res
        }
    }

    return res
}

export default detectPagely
