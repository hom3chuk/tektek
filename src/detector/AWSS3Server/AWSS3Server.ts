import { anyResourceHeaderContains, DetectorResult, HAR } from "../../common/index.js"

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

    return res
}

export default detectAWSS3Server
