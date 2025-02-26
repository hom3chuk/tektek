import { DetectorResult, HAR, rootHeaderContains } from "../../common/index.js"

const detectLighttpd = (har: HAR, asap = true) => {
    const res: DetectorResult = {
        detected: false,
        name: 'lighttpd',
        reasons: [],
    }

    if (rootHeaderContains(har, 'server', 'lighttpd')) {
        res.detected = true
        res.reasons.push('server header mentions lighttpd')
        if (asap) {
            return res
        }
    }

    return res
}

export default detectLighttpd
