import { anyJavascriptResourceContentContains, anyResourceUrlRegex, DetectorResult, HAR } from "../../common/index.js"

const detectSentry = (har: HAR, asap = true) => {
    const res: DetectorResult = {
        detected: false,
        name: 'Sentry.io',
        reasons: [],
    }

    if (anyResourceUrlRegex(har, new RegExp(/\.ingest.*?\.sentry\.io\//, 'is'))) {
        res.detected = true
        res.reasons.push('resource url contains sentry.io ingest url')
        if (asap) {
            return res
        }
    }

    if (anyJavascriptResourceContentContains(har, 'You cannot run Sentry this way in a browser extension, check: https://docs.sentry.io/')) {
        res.detected = true
        res.reasons.push('js resource contains sentry.io code signature')
        if (asap) {
            return res
        }
    }

    return res
}

export default detectSentry
