import { anyResourceUrlContains, DetectorResult, HAR } from "../../common/index.js"

const detectPrismic = (har: HAR, asap = true) => {
    const res: DetectorResult = {
        detected: false,
        name: 'Prismic',
        reasons: [],
    }

    if (anyResourceUrlContains(har, '.cdn.prismic.io')) {
        res.detected = true
        res.reasons.push('resource url contains prismic cdn url')
        if (asap) {
            return res
        }
    }

    return res
}

export default detectPrismic
