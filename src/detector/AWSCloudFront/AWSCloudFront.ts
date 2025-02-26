import { DetectorResult, HAR, rootHeaderContains } from "../../common/index.js"

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

    return res
}

export default detectAWSCloudFront
