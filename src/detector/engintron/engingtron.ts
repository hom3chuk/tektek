import { DetectorResult, HAR, rootHeaderContains } from "../../common/index.js"

const detectEngintron = (har: HAR, asap = true) => {
    const res: DetectorResult = {
        detected: false,
        name: 'Engintron',
        reasons: [],
    }

    if (rootHeaderContains(har, 'x-server-powered-by', 'engintron')) {
        res.detected = true
        res.reasons.push('x-server-powered-by header mentions engintron')
        if (asap) {
            return res
        }
    }

    return res
}

export default detectEngintron
