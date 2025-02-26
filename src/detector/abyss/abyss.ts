import { DetectorResult, HAR, rootHeaderContains } from "../../common/index.js"

const detectAbyss = (har: HAR, asap = true) => {
    const res: DetectorResult = {
        detected: false,
        name: 'Abyss',
        reasons: [],
    }

    if (rootHeaderContains(har, 'server', 'abyss')) {
        res.detected = true
        res.reasons.push('server header mentions abyss')
        if (asap) {
            return res
        }
    }

    return res
}

export default detectAbyss
