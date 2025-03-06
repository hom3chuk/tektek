import { anyResourceAnyHeadersContain, anyResourceUrlContains, DetectorResult, HAR, rootHeaderContains } from "../../common/index.js"

const detectAWSCloudFront = (har: HAR, asap = true) => {
    const res: DetectorResult = {
        detected: false,
        name: 'AWS CloudFront',
        reasons: [],
    }

    if (rootHeaderContains(har, 'server', 'cloudfront')) {
        res.detected = true
        res.reasons.push('server header mentions cloudfront')
        if (asap) {
            return res
        }
    }

    if (anyResourceUrlContains(har, '.cloudfront.net/')) {
        res.detected = true
        res.reasons.push('resource url contains cloudfront.net url')
        if (asap) {
            return res
        }
    }

    if (anyResourceAnyHeadersContain(har, 'x-amz-cf-id')) {
        res.detected = true
        res.reasons.push('resource header contains x-amz-cf-id header')
        if (asap) {
            return res
        }
    }

    if (anyResourceAnyHeadersContain(har, 'x-amz-cf-pop')) {
        res.detected = true
        res.reasons.push('resource header contains x-amz-cf-pop header')
        if (asap) {
            return res
        }
    }

    return res
}

export default detectAWSCloudFront
