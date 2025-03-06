import { anyResourceHeaderContains, anyResourceUrlContains, DetectorResult, HAR } from "../../common/index.js"

const detectAWSS3Server = (har: HAR, asap = true) => {
    const res: DetectorResult = {
        detected: false,
        name: 'AWS S3 Server',
        reasons: [],
    }

    if (anyResourceHeaderContains(har, 'server', 'amazons3')) {
        res.detected = true
        res.reasons.push('server header mentions amazons3')
        if (asap) {
            return res
        }
    }

    if (anyResourceUrlContains(har, 's3.amazonaws.com/')) {
        res.detected = true
        res.reasons.push('resource url contains s3 url')
        if (asap) {
            return res
        }
    }

    return res
}

export default detectAWSS3Server
