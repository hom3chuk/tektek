import { anyResourceUrlContains, DetectorResult, HAR } from "../../common/index.js"

const detectConstantContact = (har: HAR, asap = true) => {
    const res: DetectorResult = {
        detected: false,
        name: 'Constant Contact',
        reasons: [],
    }

    if (anyResourceUrlContains(har, 'https://static.ctctcdn.com/')) {
        res.detected = true
        res.reasons.push('resource url contains cc cdn url')
        if (asap) {
            return res
        }
    }

    return res
}

export default detectConstantContact
