import { anyJavascriptResourceContentContains, anyResourceHeaderContains, DetectorResult, HAR } from "../../common/index.js"

const detectSplunk = (har: HAR, asap = true) => {
    const res: DetectorResult = {
        detected: false,
        name: 'Splunk',
        reasons: [],
    }

    if (anyResourceHeaderContains(har, 'content-security-policy', 'splunk')) {
        res.detected = true
        res.reasons.push('csp header contains splunk')
        if (asap) {
            return res
        }
    }

    if (anyJavascriptResourceContentContains(har, 'splunk')) {
        res.detected = true
        res.reasons.push('js resource content contains splunk')
        if (asap) {
            return res
        }
    }

    return res
}

export default detectSplunk
