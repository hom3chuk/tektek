import { DetectorResult, HAR, rootHeaderContains } from "../../common/index.js"

const detectDigitalproserver = (har: HAR, asap = true) => {
    const res: DetectorResult = {
        detected: false,
        name: 'Digitalproserver',
        reasons: [],
    }

    if (rootHeaderContains(har, 'server', 'digitalproserver')) {
        res.detected = true
        res.reasons.push('server header mentions digitalproserver')
        if (asap) {
            return res
        }
    }

    return res
}

export default detectDigitalproserver
