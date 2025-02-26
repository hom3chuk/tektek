import { anyResourceAnyHeadersContain, anyResourceHeaderEquals, DetectorResult, HAR, rootHeaderContains, rootHeaderEquals } from "../../common/index.js"

const detectExample = (har: HAR, asap = true) => {
    const res: DetectorResult = {
        detected: false,
        name: 'Example Detector',
        reasons: [],
    }

    // detects if ANY resource on the page is served with nginx
    if (anyResourceHeaderEquals(har, 'server', 'nginx')) {
        res.detected = true
        res.reasons.push('has server header')
        if (asap) {
            return res
        }
    }

    // detects if ANY resource on the page mentions Heroku
    if (anyResourceAnyHeadersContain(har, 'heroku')) {
        res.detected = true
        res.reasons.push('header mentions heroku')
        if (asap) {
            return res
        }
    }

    // detects if ROOT (ie the html page itself) is gzipped on transfer
    if (rootHeaderEquals(har, 'content-encoding', 'gzip')) {
        res.detected = true
        res.reasons.push('page has gzip header')
        if (asap) {
            return res
        }
    }

    // detects if ROOT (ie the html page itself) is served with Apache
    if (rootHeaderContains(har, 'server', 'apache')) {
        res.detected = true
        res.reasons.push('header mentions apache')
        if (asap) {
            return res
        }
    }

    return res
}

export default detectExample
