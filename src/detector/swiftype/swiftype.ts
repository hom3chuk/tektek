import { anyResourceUrlContains, DetectorResult, HAR } from "../../common/index.js"

const detectSwiftype = (har: HAR, asap = true) => {
    const res: DetectorResult = {
        detected: false,
        name: 'Swiftype',
        reasons: [],
    }

    if (anyResourceUrlContains(har, 'swiftypecdn.com')) {
        res.detected = true
        res.reasons.push('resource url contains swiftype cdn url')
        if (asap) {
            return res
        }
    }

    return res
}

export default detectSwiftype
