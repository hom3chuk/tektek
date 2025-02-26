import { anyResourceHeaderContains, DetectorResult, HAR } from "../../common/index.js"

const detectAkamaiNetStorage = (har: HAR, asap = true) => {
    const res: DetectorResult = {
        detected: false,
        name: 'Akamai Net Storage',
        reasons: [],
    }

    if (anyResourceHeaderContains(har, 'server', 'AkamaiNetStorage')) {
        res.detected = true
        res.reasons.push('a resource has AkamaiNetStorage server header')
        if (asap) {
            return res
        }
    }

    return res
}

export default detectAkamaiNetStorage
