import { anyResourceUrlContains, DetectorResult, HAR, rootBodyContains } from "../../common/index.js"

const detectMatomo = (har: HAR, asap = true) => {
    const res: DetectorResult = {
        detected: false,
        name: 'Matomo',
        reasons: [],
    }

    if (anyResourceUrlContains(har, 'https://cdn.matomo.cloud/')) {
        res.detected = true
        res.reasons.push('resource url contains matomo cloud url')
        if (asap) {
            return res
        }
    }

    if (rootBodyContains(har, 'var _mtm = window._mtm')) {
        res.detected = true
        res.reasons.push('resource url contains matomo js code url')
        if (asap) {
            return res
        }
    }

    return res
}

export default detectMatomo
