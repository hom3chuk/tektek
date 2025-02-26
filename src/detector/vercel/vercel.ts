import { DetectorResult, HAR, rootHeaderContains } from "../../common/index.js"

const detectVercel = (har: HAR, asap = true) => {
    const res: DetectorResult = {
        detected: false,
        name: 'Vercel',
        reasons: [],
    }

    if (rootHeaderContains(har, 'server', 'vercel')) {
        res.detected = true
        res.reasons.push('server header mentions vercel')
        if (asap) {
            return res
        }
    }

    return res
}

export default detectVercel
