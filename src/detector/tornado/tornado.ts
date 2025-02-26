import { DetectorResult, HAR, rootHeaderContains } from "../../common/index.js"

const detectTornado = (har: HAR, asap = true) => {
    const res: DetectorResult = {
        detected: false,
        name: 'Tornado',
        reasons: [],
    }

    if (rootHeaderContains(har, 'server', 'tornado')) {
        res.detected = true
        res.reasons.push('server header mentions tornado')
        if (asap) {
            return res
        }
    }

    return res
}

export default detectTornado
