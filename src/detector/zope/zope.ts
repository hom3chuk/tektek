import { DetectorResult, HAR, rootHeaderContains } from "../../common/index.js"

const detectZope = (har: HAR, asap = true) => {
    const res: DetectorResult = {
        detected: false,
        name: 'Zope',
        reasons: [],
    }

    if (rootHeaderContains(har, 'server', 'zope')) {
        res.detected = true
        res.reasons.push('server header mentions zope')
        if (asap) {
            return res
        }
    }

    return res
}

export default detectZope
