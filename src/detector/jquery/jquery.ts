import { anyJavascriptResourceContentContains, DetectorResult, HAR, rootHeaderContains } from "../../common/index.js"

const detectJQuery = (har: HAR, asap = true) => {
    const res: DetectorResult = {
        detected: false,
        name: 'jQuery',
        reasons: [],
    }

    if (anyJavascriptResourceContentContains(har, '/*! jQuery v', 20)) {
        res.detected = true
        res.reasons.push('jQuery header comment in resource files')
        if (asap) {
            return res
        }
    }

    return res
}

export default detectJQuery
