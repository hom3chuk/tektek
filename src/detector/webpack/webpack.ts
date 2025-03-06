import { anyJavascriptResourceContentContains, DetectorResult, HAR } from "../../common/index.js"

const detectWebpack = (har: HAR, asap = true) => {
    const res: DetectorResult = {
        detected: false,
        name: 'Webpack',
        reasons: [],
    }

    if (anyJavascriptResourceContentContains(har, 'webpackChunk')) {
        res.detected = true
        res.reasons.push('js resource contains webpack chunk code signature')
        if (asap) {
            return res
        }
    }

    return res
}

export default detectWebpack
