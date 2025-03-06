import { anyResourceUrlContains, DetectorResult, HAR } from "../../common/index.js"

const detectAimtell = (har: HAR, asap = true) => {
    const res: DetectorResult = {
        detected: false,
        name: 'Aimtell',
        reasons: [],
    }

    if (anyResourceUrlContains(har, 'https://cdn.aimtell.com/')) {
        res.detected = true
        res.reasons.push('resource url contains aimtell cdn url')
        if (asap) {
            return res
        }
    }

    return res
}

export default detectAimtell
