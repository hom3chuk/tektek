import { anyJavascriptResourceContentContains, DetectorResult, HAR, rootHeaderContains } from "../../common/index.js"

const detectReact = (har: HAR, asap = true) => {
    const res: DetectorResult = {
        detected: false,
        name: 'React',
        reasons: [],
    }

    if (anyJavascriptResourceContentContains(har, '* @license React')) {
        res.detected = true
        res.reasons.push('react license comment in resource files')
        if (asap) {
            return res
        }
    }

    if (anyJavascriptResourceContentContains(har, 'react-jsx-runtime.production.min.js')) {
        res.detected = true
        res.reasons.push('react-jsx-runtime.production.min.js in resource files')
        if (asap) {
            return res
        }
    }

    if (anyJavascriptResourceContentContains(har, 'react-jsx-runtime.development.js')) {
        res.detected = true
        res.reasons.push('react-jsx-runtime.development.js in resource files')
        if (asap) {
            return res
        }
    }

    if (anyJavascriptResourceContentContains(har, 'react.production.min.js')) {
        res.detected = true
        res.reasons.push('react.production.min.js in resource files')
        if (asap) {
            return res
        }
    }

    if (anyJavascriptResourceContentContains(har, 'react.development.js')) {
        res.detected = true
        res.reasons.push('react.development.js in resource files')
        if (asap) {
            return res
        }
    }

    if (anyJavascriptResourceContentContains(har, 'react-dom.production.min.js')) {
        res.detected = true
        res.reasons.push('react-dom.production.min.js in resource files')
        if (asap) {
            return res
        }
    }

    if (anyJavascriptResourceContentContains(har, 'react-dom.development.min.js')) {
        res.detected = true
        res.reasons.push('react-dom.development.min.js in resource files')
        if (asap) {
            return res
        }
    }

    return res
}

export default detectReact
