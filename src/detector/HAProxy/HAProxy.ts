import { anyResourceAnyHeadersContain, anyResourceHeaderContains, anyResourceHeaderExists, DetectorResult, HAR, rootHeaderContains, rootHeaderExists } from "../../common/index.js"

const detectHAProxy = (har: HAR, asap = true) => {
    const res: DetectorResult = {
        detected: false,
        name: 'HAProxy',
        reasons: [],
    }

    if (anyResourceHeaderExists(har, 'x-haproxy')) {
        res.detected = true
        res.reasons.push('x-haproxy header exists')
        if (asap) {
            return res
        }
    }

    if (anyResourceHeaderContains(har, 'x-proxy', 'haproxy')) {
        res.detected = true
        res.reasons.push('x-proxy header mentions haproxy')
        if (asap) {
            return res
        }
    }

    if (anyResourceHeaderExists(har, 'x-haproxy-info')) {
        res.detected = true
        res.reasons.push('x-haproxy-info header exists')
        if (asap) {
            return res
        }
    }

    if (anyResourceHeaderExists(har, 'x-haproxy-server')) {
        res.detected = true
        res.reasons.push('x-haproxy-server header exists')
        if (asap) {
            return res
        }
    }

    if (anyResourceAnyHeadersContain(har, 'haproxy-external')) {
        res.detected = true
        res.reasons.push('aproxy-external mentioned')
        if (asap) {
            return res
        }
    }

    return res
}

export default detectHAProxy
