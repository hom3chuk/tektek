import { DetectorResult, HAR, rootHeaderExists } from "../../common/index.js"

const detectCloudflare = (har: HAR, asap = true) => {
    const res: DetectorResult = {
        detected: false,
        name: 'Cloudflare',
        reasons: [],
    }

    if (rootHeaderExists(har, 'cf-ray')) {
        res.detected = true
        res.reasons.push('cf-ray header exists')
        if (asap) {
            return res
        }
    }

    return res
}

export default detectCloudflare
