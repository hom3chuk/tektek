import { anyResourceUrlContains, DetectorResult, HAR } from "../../common/index.js"

const detectNorthbeam = (har: HAR, asap = true) => {
    const res: DetectorResult = {
        detected: false,
        name: 'Northbeam',
        reasons: [],
    }

    if (anyResourceUrlContains(har, 'https://j.northbeam.io/')) {
        res.detected = true
        res.reasons.push('resource url contains northbeam js url')
        if (asap) {
            return res
        }
    }

    return res
}

export default detectNorthbeam
