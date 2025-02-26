import { DetectorResult, HAR, rootHeaderContains } from "../../common/index.js"

const detectApache = (har: HAR, asap = true) => {
    const res: DetectorResult = {
        detected: false,
        name: 'Apache Web Server',
        reasons: [],
    }

    if (rootHeaderContains(har, 'server', 'apache')) {
        res.detected = true
        res.reasons.push('server header mentions apache')
        if (asap) {
            return res
        }
    }

    return res
}

export default detectApache
