import { anyResourceHeaderContains, DetectorResult, HAR } from "../../common/index.js"

const detectFastly = (har: HAR, asap = true) => {
    const res: DetectorResult = {
        detected: false,
        name: 'Fastly',
        reasons: [],
    }

    if (anyResourceHeaderContains(har, 'server', 'fastly')) {
        res.detected = true
        res.reasons.push('resource server header mentions fastly')
        if (asap) {
            return res
        }
    }

    return res
}

export default detectFastly
