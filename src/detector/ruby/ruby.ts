import { DetectorResult, HAR, rootHeaderContains } from "../../common/index.js"

const detectRuby = (har: HAR, asap = true) => {
    const res: DetectorResult = {
        detected: false,
        name: 'Ruby',
        reasons: [],
    }

    if (rootHeaderContains(har, 'server', 'ruby')) {
        res.detected = true
        res.reasons.push('server header mentions ruby')
        if (asap) {
            return res
        }
    }

    return res
}

export default detectRuby
