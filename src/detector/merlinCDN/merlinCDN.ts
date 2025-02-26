import { anyResourceHeaderContains, DetectorResult, HAR } from "../../common/index.js"

const detectMerlinCDN = (har: HAR, asap = true) => {
    const res: DetectorResult = {
        detected: false,
        name: 'Merlin CDN',
        reasons: [],
    }

    if (anyResourceHeaderContains(har, 'server', 'merlincdn')) {
        res.detected = true
        res.reasons.push('resource server header mentions MerlinCDN')
        if (asap) {
            return res
        }
    }

    return res
}

export default detectMerlinCDN
