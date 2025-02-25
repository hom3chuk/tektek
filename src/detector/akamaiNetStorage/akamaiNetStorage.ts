import { anyHeaderEquals, DetectorResult, HAR } from "../../common/index.js"

const detectAkamaiNetSttorage = (har: HAR, asap = true) => {
    const res: DetectorResult = {
        detected: false,
        name: 'Akamai Net Storage',
        reasons: [],
    }

    if (anyHeaderEquals(har, 'server', 'AkamaiNetStorage')) {
        res.detected = true
        res.reasons.push('has server header')
        if (asap) {
            return res
        }
    }

    return res
}

export default detectAkamaiNetSttorage
