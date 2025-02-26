import { anyJavascriptResourceContentContains, DetectorResult, HAR, rootHeaderContains } from "../../common/index.js"

const detectParsely = (har: HAR, asap = true) => {
    const res: DetectorResult = {
        detected: false,
        name: 'Parsely',
        reasons: [],
    }

    if (anyJavascriptResourceContentContains(har, 'window.PARSELY', 100)) {
        res.detected = true
        res.reasons.push('parsely code present in js resource')
        if (asap) {
            return res
        }
    }

    return res
}

export default detectParsely
