import { anyResourceUrlContains, DetectorResult, HAR } from "../../common/index.js"

const detectStripe = (har: HAR, asap = true) => {
    const res: DetectorResult = {
        detected: false,
        name: 'Stripe',
        reasons: [],
    }

    if (anyResourceUrlContains(har, 'https://js.stripe.com/')) {
        res.detected = true
        res.reasons.push('resource url contains stripe js url')
        if (asap) {
            return res
        }
    }

    if (anyResourceUrlContains(har, 'https://m.stripe.network/')) {
        res.detected = true
        res.reasons.push('resource url contains stripe url')
        if (asap) {
            return res
        }
    }

    return res
}

export default detectStripe
