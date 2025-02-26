import { DetectorResult, HAR, rootHeaderContains } from "../../common/index.js"

const detectH2O = (har: HAR, asap = true) => {
    const res: DetectorResult = {
        detected: false,
        name: 'H2O',
        reasons: [],
    }

    if (rootHeaderContains(har, 'server', 'h2o')) {
        res.detected = true
        res.reasons.push('server header mentions h2o')
        if (asap) {
            return res
        }
    }

    return res
}

export default detectH2O
