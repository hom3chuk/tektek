import { DetectorResult, HAR, rootHeaderContains } from "../../common/index.js"

const detectCloudflareServer = (har: HAR, asap = true) => {
    const res: DetectorResult = {
        detected: false,
        name: 'Cloudflare Server',
        reasons: [],
    }

    if (rootHeaderContains(har, 'server', 'cloudflare')) {
        res.detected = true
        res.reasons.push('server header mentions cloudflare')
        if (asap) {
            return res
        }
    }

    return res
}

export default detectCloudflareServer
