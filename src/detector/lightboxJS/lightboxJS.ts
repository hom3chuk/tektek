import { anyResourceUrlContains, DetectorResult, HAR } from "../../common/index.js"

const detectLightboxJS = (har: HAR, asap = true) => {
    const res: DetectorResult = {
        detected: false,
        name: 'Lightbox JS',
        reasons: [],
    }

    if (anyResourceUrlContains(har, 'https://www.lightboxcdn.com/')) {
        res.detected = true
        res.reasons.push('resource url contains lightbox js cdn url')
        if (asap) {
            return res
        }
    }

    return res
}

export default detectLightboxJS
