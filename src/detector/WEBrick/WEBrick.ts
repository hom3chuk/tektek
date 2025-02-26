import { DetectorResult, HAR, rootHeaderContains } from "../../common/index.js"

const detectWEBrick = (har: HAR, asap = true) => {
    const res: DetectorResult = {
        detected: false,
        name: 'WEBrick',
        reasons: [],
    }

    if (rootHeaderContains(har, 'server', 'webrick')) {
        res.detected = true
        res.reasons.push('server header mentions webrick')
        if (asap) {
            return res
        }
    }

    return res
}

export default detectWEBrick
