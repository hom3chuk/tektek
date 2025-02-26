import { DetectorResult, HAR, rootHeaderContains } from "../../common/index.js"

const detectAzure = (har: HAR, asap = true) => {
    const res: DetectorResult = {
        detected: false,
        name: 'Azure',
        reasons: [],
    }

    if (rootHeaderContains(har, 'server', 'azure')) {
        res.detected = true
        res.reasons.push('server header mentions azure')
        if (asap) {
            return res
        }
    }

    return res
}

export default detectAzure
