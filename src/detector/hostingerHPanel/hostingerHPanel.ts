import { DetectorResult, HAR, rootAnyHeaderContains, rootHeaderContains } from "../../common/index.js"

const detectHostingerHPanel = (har: HAR, asap = true) => {
    const res: DetectorResult = {
        detected: false,
        name: 'Hostinger hPanel',
        reasons: [],
    }

    if (rootHeaderContains(har, 'panel', 'hpanel')) {
        res.detected = true
        res.reasons.push('panel header mentions hpanel')
        if (asap) {
            return res
        }
    }

    return res
}

export default detectHostingerHPanel
