import { DetectorResult, HAR, rootHeaderContains } from "../../common/index.js"

const detectMicrosoftIIS = (har: HAR, asap = true) => {
    const res: DetectorResult = {
        detected: false,
        name: 'nginx',
        reasons: [],
    }

    if (rootHeaderContains(har, 'server', 'iis')) {
        res.detected = true
        res.reasons.push('server header mentions iis')
        if (asap) {
            return res
        }
    }

    return res
}

export default detectMicrosoftIIS
