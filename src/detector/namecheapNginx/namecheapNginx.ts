import { DetectorResult, HAR, rootHeaderContains } from "../../common/index.js"

const detectNamecheapNginx = (har: HAR, asap = true) => {
    const res: DetectorResult = {
        detected: false,
        name: 'Namecheap nginx',
        reasons: [],
    }

    if (rootHeaderContains(har, 'server', 'namecheap-nginx')) {
        res.detected = true
        res.reasons.push('server header mentions namecheap-nginx')
        if (asap) {
            return res
        }
    }

    return res
}

export default detectNamecheapNginx
