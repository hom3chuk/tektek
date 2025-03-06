import { anyResourceUrlContains, DetectorResult, HAR, rootHeaderContains } from "../../common/index.js"

const detectJoomla = (har: HAR, asap = true) => {
    const res: DetectorResult = {
        detected: false,
        name: 'Joomla!',
        reasons: [],
    }

    if (rootHeaderContains(har, 'x-content-encoded-by', 'joomla')) {
        res.detected = true
        res.reasons.push('x-content-encoded-by header mentions joomla')
        if (asap) {
            return res
        }
    }

    if (rootHeaderContains(har, 'x-powered-by', 'joomla')) {
        res.detected = true
        res.reasons.push('x-powered-by header mentions joomla')
        if (asap) {
            return res
        }
    }

    if (rootHeaderContains(har, 'x-content-powered-by', 'joomla')) {
        res.detected = true
        res.reasons.push('x-content-powered-by header mentions joomla')
        if (asap) {
            return res
        }
    }

    if (anyResourceUrlContains(har, '/media/jui/js/')) {
        res.detected = true
        res.reasons.push('resource url contains jui js url')
        if (asap) {
            return res
        }
    }

    return res
}

export default detectJoomla
