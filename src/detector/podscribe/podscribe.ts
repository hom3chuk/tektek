import { anyResourceUrlContains, DetectorResult, HAR } from "../../common/index.js"

const detectPodscribe = (har: HAR, asap = true) => {
    const res: DetectorResult = {
        detected: false,
        name: 'Podscribe',
        reasons: [],
    }

    if (anyResourceUrlContains(har, 'podscribe.com')) {
        res.detected = true
        res.reasons.push('resource url contains podscribe url')
        if (asap) {
            return res
        }
    }

    return res
}

export default detectPodscribe
