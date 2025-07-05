import { anyResourceHeaderContains, DetectorResult, HAR } from "../../common/index.js"

const detectDatadog = (har: HAR, asap = true) => {
    const res: DetectorResult = {
        detected: false,
        name: 'Datadog',
        reasons: [],
    }

    if (anyResourceHeaderContains(har, 'content-security-policy', 'datadoghq.com')) {
        res.detected = true
        res.reasons.push('csp header contains datadoghq url')
        if (asap) {
            return res
        }
    }

    return res
}

export default detectDatadog
