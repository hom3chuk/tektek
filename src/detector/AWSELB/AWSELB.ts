import { anyResourceHeaderContains, DetectorResult, HAR } from "../../common/index.js"

const detectAWSELB = (har: HAR, asap = true) => {
    const res: DetectorResult = {
        detected: false,
        name: 'AWS ELB',
        reasons: [],
    }

    if (anyResourceHeaderContains(har, 'server', 'awselb')) {
        res.detected = true
        res.reasons.push('server header mentions awselb')
        if (asap) {
            return res
        }
    }

    return res
}

export default detectAWSELB
