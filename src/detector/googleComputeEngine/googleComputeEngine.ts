import { anyResourceHeaderContains, DetectorResult, HAR } from "../../common/index.js"

const detectGoogleComputeEngine = (har: HAR, asap = true) => {
    const res: DetectorResult = {
        detected: false,
        name: 'Google Compute Engine',
        reasons: [],
    }

    if (anyResourceHeaderContains(har, 'server', 'gcp')) {
        res.detected = true
        res.reasons.push('resource server header mentions gcp')
        if (asap) {
            return res
        }
    }

    return res
}

export default detectGoogleComputeEngine
