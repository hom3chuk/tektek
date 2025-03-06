import { anyResourceUrlContains, DetectorResult, HAR } from "../../common/index.js"

const detectWisernotify = (har: HAR, asap = true) => {
    const res: DetectorResult = {
        detected: false,
        name: 'Wisernotify',
        reasons: [],
    }

    if (anyResourceUrlContains(har, 'wisernotify.com')) {
        res.detected = true
        res.reasons.push('resource url contains wisernotify url')
        if (asap) {
            return res
        }
    }

    if (anyResourceUrlContains(har, 'wisermapp.com')) {
        res.detected = true
        res.reasons.push('resource url contains wisermapp url')
        if (asap) {
            return res
        }
    }

    return res
}

export default detectWisernotify
