import { DetectorResult, HAR, rootHeaderContains } from "../../common/index.js"

const detectJetty = (har: HAR, asap = true) => {
    const res: DetectorResult = {
        detected: false,
        name: 'Jetty',
        reasons: [],
    }

    if (rootHeaderContains(har, 'server', 'jetty')) {
        res.detected = true
        res.reasons.push('server header mentions jetty')
        if (asap) {
            return res
        }
    }

    return res
}

export default detectJetty
