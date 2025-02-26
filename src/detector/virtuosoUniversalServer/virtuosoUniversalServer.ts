import { DetectorResult, HAR, rootHeaderContains } from "../../common/index.js"

const detectVirtuosoUniversalServer = (har: HAR, asap = true) => {
    const res: DetectorResult = {
        detected: false,
        name: 'Virtuoso Universal Server',
        reasons: [],
    }

    if (rootHeaderContains(har, 'server', 'virtuoso')) {
        res.detected = true
        res.reasons.push('server header mentions virtuoso')
        if (asap) {
            return res
        }
    }

    return res
}

export default detectVirtuosoUniversalServer
