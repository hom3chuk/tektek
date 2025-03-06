import { anyResourceUrlContains, DetectorResult, HAR } from "../../common/index.js"

const detectFoxyCart = (har: HAR, asap = true) => {
    const res: DetectorResult = {
        detected: false,
        name: 'FoxyCart',
        reasons: [],
    }

    if (anyResourceUrlContains(har, 'https://cdn.foxycart.com/')) {
        res.detected = true
        res.reasons.push('resource url contains foxycart url')
        if (asap) {
            return res
        }
    }

    return res
}

export default detectFoxyCart
