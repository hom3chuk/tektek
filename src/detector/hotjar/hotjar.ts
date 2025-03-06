import { anyResourceUrlContains, DetectorResult, HAR } from "../../common/index.js"

const detectHotjar = (har: HAR, asap = true) => {
    const res: DetectorResult = {
        detected: false,
        name: 'Hotjar',
        reasons: [],
    }

    if (anyResourceUrlContains(har, 'https://static.hotjar.com/')) {
        res.detected = true
        res.reasons.push('resource url contains hotjar static url')
        if (asap) {
            return res
        }
    }

    return res
}

export default detectHotjar
