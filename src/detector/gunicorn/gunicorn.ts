import { DetectorResult, HAR, rootHeaderContains } from "../../common/index.js"

const detectGunicorn = (har: HAR, asap = true) => {
    const res: DetectorResult = {
        detected: false,
        name: 'gunicorn',
        reasons: [],
    }

    if (rootHeaderContains(har, 'server', 'gunicorn')) {
        res.detected = true
        res.reasons.push('server header mentions gunicorn')
        if (asap) {
            return res
        }
    }

    return res
}

export default detectGunicorn
