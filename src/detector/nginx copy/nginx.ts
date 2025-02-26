import { DetectorResult, getRootHeaders, HAR, rootHeaderContains } from "../../common/index.js"

const detectNginx = (har: HAR, asap = true) => {
    const res: DetectorResult = {
        detected: false,
        name: 'nginx',
        reasons: [],
    }

    if (rootHeaderContains(har, 'server', 'php')) {
        res.detected = true
        res.reasons.push('has server header')
        if (asap) {
            return res
        }
    }

    return res
}

export default detectNginx
