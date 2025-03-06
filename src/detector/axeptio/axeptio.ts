import { anyResourceUrlContains, DetectorResult, HAR } from "../../common/index.js"

const detectAxeptio = (har: HAR, asap = true) => {
    const res: DetectorResult = {
        detected: false,
        name: 'Axeptio',
        reasons: [],
    }

    if (anyResourceUrlContains(har, 'https://static.axept.io/sdk.js')) {
        res.detected = true
        res.reasons.push('resource url contains axeptio js url')
        if (asap) {
            return res
        }
    }

    return res
}

export default detectAxeptio
