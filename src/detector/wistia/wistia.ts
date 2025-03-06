import { anyResourceUrlContains, DetectorResult, HAR } from "../../common/index.js"

const detectWistia = (har: HAR, asap = true) => {
    const res: DetectorResult = {
        detected: false,
        name: 'Wistia',
        reasons: [],
    }

    if (anyResourceUrlContains(har, 'https://fast.wistia.com/player.js')) {
        res.detected = true
        res.reasons.push('resource url contains wistia player js url')
        if (asap) {
            return res
        }
    }

    return res
}

export default detectWistia
