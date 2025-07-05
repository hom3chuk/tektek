
import { anyResourceUrlContains, DetectorResult, HAR } from "../../common/index.js"

const detectUnpkg = (har: HAR, asap = true) => {
    const res: DetectorResult = {
        detected: false,
        name: 'unpkg',
        reasons: [],
    }

    if (anyResourceUrlContains(har, 'unpkg.com')) {
        res.detected = true
        res.reasons.push('resource url contains unpkg.com url')
        if (asap) {
            return res
        }
    }

    return res
}

export default detectUnpkg
