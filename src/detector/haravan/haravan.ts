import { DetectorResult, HAR, rootHeaderContains } from "../../common/index.js"

const detectHaravan = (har: HAR, asap = true) => {
    const res: DetectorResult = {
        detected: false,
        name: 'Haravan',
        reasons: [],
    }

    if (rootHeaderContains(har, 'link', 'hstatic.net')) {
        res.detected = true
        res.reasons.push('link header mentions hstatic.net')
        if (asap) {
            return res
        }
    }

    return res
}

export default detectHaravan
