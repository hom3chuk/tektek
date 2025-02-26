import { DetectorResult, HAR, rootHeaderContains } from "../../common/index.js"

const detectWPEngine = (har: HAR, asap = true) => {
    const res: DetectorResult = {
        detected: false,
        name: 'WP Engine',
        reasons: [],
    }

    if (rootHeaderContains(har, 'x-powered-by', 'wp engine')) {
        res.detected = true
        res.reasons.push('x-powered-by header mentions wp engine')
        if (asap) {
            return res
        }
    }

    return res
}

export default detectWPEngine
