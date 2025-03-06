import { anyResourceUrlContains, DetectorResult, HAR } from "../../common/index.js"

const detectTaboola = (har: HAR, asap = true) => {
    const res: DetectorResult = {
        detected: false,
        name: 'Taboola',
        reasons: [],
    }

    if (anyResourceUrlContains(har, 'taboola.com')) {
        res.detected = true
        res.reasons.push('resource url contains taboola url')
        if (asap) {
            return res
        }
    }

    if (anyResourceUrlContains(har, 'TABOOLA_SESSION_START')) {
        res.detected = true
        res.reasons.push('resource url contains taboola session start')
        if (asap) {
            return res
        }
    }

    return res
}

export default detectTaboola
