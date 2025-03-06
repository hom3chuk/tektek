import { anyResourceUrlRegex, DetectorResult, HAR } from "../../common/index.js"

const detectFacebookSDK = (har: HAR, asap = true) => {
    const res: DetectorResult = {
        detected: false,
        name: 'Facebook SDK',
        reasons: [],
    }

    if (anyResourceUrlRegex(har, new RegExp(/https:\/\/connect\.facebook\.net\/.*?sdk\.js/, 'is'))) {
        res.detected = true
        res.reasons.push('resource url contains facebook SDK url')
        if (asap) {
            return res
        }
    }

    return res
}

export default detectFacebookSDK
