import { DetectorResult, HAR, rootHeaderContains } from "../../common/index.js"

const detectNaviServer = (har: HAR, asap = true) => {
    const res: DetectorResult = {
        detected: false,
        name: 'NaviServer',
        reasons: [],
    }

    if (rootHeaderContains(har, 'server', 'naviserver')) {
        res.detected = true
        res.reasons.push('server header mentions naviserver')
        if (asap) {
            return res
        }
    }

    return res
}

export default detectNaviServer
