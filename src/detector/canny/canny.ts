import { anyResourceAnyHeadersContain, DetectorResult, HAR } from "../../common/index.js"

const detectCanny = (har: HAR, asap = true) => {
    const res: DetectorResult = {
        detected: false,
        name: 'Canny',
        reasons: [],
    }

    if (anyResourceAnyHeadersContain(har, 'canny__experiment')) {
        res.detected = true
        res.reasons.push('server header mentions canny__experiment')
        if (asap) {
            return res
        }
    }

    return res
}

export default detectCanny
