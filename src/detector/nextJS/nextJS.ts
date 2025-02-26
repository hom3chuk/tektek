import { DetectorResult, HAR, rootHeaderContains } from "../../common/index.js"

const detectNextJS = (har: HAR, asap = true) => {
    const res: DetectorResult = {
        detected: false,
        name: 'Next.js',
        reasons: [],
    }

    if (rootHeaderContains(har, 'x-powered-by', 'next.js')) {
        res.detected = true
        res.reasons.push('x-powered-by header mentions next.js')
        if (asap) {
            return res
        }
    }

    return res
}

export default detectNextJS
