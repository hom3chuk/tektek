import { anyResourceHeaderContains, DetectorResult, HAR } from "../../common/index.js"

const detectWordPress = (har: HAR, asap = true) => {
    const res: DetectorResult = {
        detected: false,
        name: 'WordPress',
        reasons: [],
    }

    if (anyResourceHeaderContains(har, 'link', '/wp-json/')) {
        res.detected = true
        res.reasons.push('link header contains /wp-json/')
        if (asap) {
            return res
        }
    }

    return res
}

export default detectWordPress
