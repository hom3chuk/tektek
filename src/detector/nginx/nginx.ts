import { DetectorResult, HAR, rootHeaderContains } from "../../common/index.js"

const detectNginx = (har: HAR, asap = true) => {
    const res: DetectorResult = {
        detected: false,
        name: 'nginx',
        reasons: [],
    }

    if (rootHeaderContains(har, 'server', 'nginx')) {
        res.detected = true
        res.reasons.push('server header mentions nginx')
        if (asap) {
            return res
        }
    }

    return res
}

export default detectNginx
