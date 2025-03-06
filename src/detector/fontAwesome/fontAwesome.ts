import { anyResourceUrlContains, DetectorResult, HAR } from "../../common/index.js"

const detectFontAwesome = (har: HAR, asap = true) => {
    const res: DetectorResult = {
        detected: false,
        name: 'Font Awesome',
        reasons: [],
    }

    if (anyResourceUrlContains(har, 'fontawesome.com/')) {
        res.detected = true
        res.reasons.push('resource url contains fontawesome url')
        if (asap) {
            return res
        }
    }

    return res
}

export default detectFontAwesome
