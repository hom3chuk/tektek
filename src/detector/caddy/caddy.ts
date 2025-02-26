import { DetectorResult, HAR, rootHeaderContains } from "../../common/index.js"

const detectCaddy = (har: HAR, asap = true) => {
    const res: DetectorResult = {
        detected: false,
        name: 'Caddy',
        reasons: [],
    }

    if (rootHeaderContains(har, 'server', 'caddy')) {
        res.detected = true
        res.reasons.push('server header mentions caddy')
        if (asap) {
            return res
        }
    }

    return res
}

export default detectCaddy
