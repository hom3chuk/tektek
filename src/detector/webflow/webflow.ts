import { anyResourceAnyHeadersContain, DetectorResult, HAR } from "../../common/index.js"

const detectWebflow = (har: HAR, asap = true) => {
    const res: DetectorResult = {
        detected: false,
        name: 'Webflow',
        reasons: [],
    }

    if (anyResourceAnyHeadersContain(har, 'cdn.webflow.com')) {
        res.detected = true
        res.reasons.push('resource header has cdn.webflow.com')
        if (asap) {
            return res
        }
    }

    return res
}

export default detectWebflow
