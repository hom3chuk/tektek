import { DetectorResult, HAR, rootHeaderContains } from "../../common/index.js"

const detectBitrix = (har: HAR, asap = true) => {
    const res: DetectorResult = {
        detected: false,
        name: 'Bitrix',
        reasons: [],
    }

    if (rootHeaderContains(har, 'server', 'bitrix')) {
        res.detected = true
        res.reasons.push('server header mentions bitrix')
        if (asap) {
            return res
        }
    }

    return res
}

export default detectBitrix
