import { DetectorResult, HAR, rootAnyHeaderContains, rootHeaderContains } from "../../common/index.js"

const detectHeroku = (har: HAR, asap = true) => {
    const res: DetectorResult = {
        detected: false,
        name: 'Heroku',
        reasons: [],
    }

    if (rootAnyHeaderContains(har, 'heroku')) {
        res.detected = true
        res.reasons.push('header mentions heroku')
        if (asap) {
            return res
        }
    }

    return res
}

export default detectHeroku
