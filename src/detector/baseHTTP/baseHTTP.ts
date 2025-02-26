import { DetectorResult, HAR, rootHeaderContains } from "../../common/index.js"

const detectBaseHTTP = (har: HAR, asap = true) => {
    const res: DetectorResult = {
        detected: false,
        name: 'BaseHTTP',
        reasons: [],
    }

    if (rootHeaderContains(har, 'server', 'basehttp')) {
        res.detected = true
        res.reasons.push('server header mentions basehttp')
        if (asap) {
            return res
        }
    }

    return res
}

export default detectBaseHTTP
