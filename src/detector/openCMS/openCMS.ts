import { DetectorResult, HAR, rootHeaderContains } from "../../common/index.js"

const detectOpenCMS = (har: HAR, asap = true) => {
    const res: DetectorResult = {
        detected: false,
        name: 'OpenCMS',
        reasons: [],
    }

    if (rootHeaderContains(har, 'server', 'opencms')) {
        res.detected = true
        res.reasons.push('server header mentions opencms')
        if (asap) {
            return res
        }
    }

    return res
}

export default detectOpenCMS
