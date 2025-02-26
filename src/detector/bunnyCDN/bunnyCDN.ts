import { anyResourceHeaderContains, DetectorResult, HAR } from "../../common/index.js"

const detectBunnyCDN = (har: HAR, asap = true) => {
    const res: DetectorResult = {
        detected: false,
        name: 'Bunny CDN',
        reasons: [],
    }

    if (anyResourceHeaderContains(har, 'server', 'bunnycdn')) {
        res.detected = true
        res.reasons.push('resource server header mentions bunnycdn')
        if (asap) {
            return res
        }
    }

    return res
}

export default detectBunnyCDN
