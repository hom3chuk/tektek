import { DetectorResult, HAR, rootHeaderContains } from "../../common/index.js"

const detectBaiduWAF = (har: HAR, asap = true) => {
    const res: DetectorResult = {
        detected: false,
        name: 'Baidu WAF',
        reasons: [],
    }

    if (rootHeaderContains(har, 'server', 'baidu_waf')) {
        res.detected = true
        res.reasons.push('server header mentions baidu_waf')
        if (asap) {
            return res
        }
    }

    return res
}

export default detectBaiduWAF
