import { DetectorResult, HAR, rootHeaderContains } from "../../common/index.js"

const detectTwistedWeb = (har: HAR, asap = true) => {
    const res: DetectorResult = {
        detected: false,
        name: 'Twisted Web',
        reasons: [],
    }

    if (rootHeaderContains(har, 'server', 'twistedweb')) {
        res.detected = true
        res.reasons.push('server header mentions twistedweb')
        if (asap) {
            return res
        }
    }

    return res
}

export default detectTwistedWeb
