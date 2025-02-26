import { DetectorResult, HAR, rootHeaderExists } from "../../common/index.js"

const detectAWSLambda = (har: HAR, asap = true) => {
    const res: DetectorResult = {
        detected: false,
        name: 'AWS Lambda',
        reasons: [],
    }

    if (rootHeaderExists(har, 'x-lambda-id')) {
        res.detected = true
        res.reasons.push('has x-lambda-id header')
        if (asap) {
            return res
        }
    }

    return res
}

export default detectAWSLambda
