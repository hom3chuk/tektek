import { anyResourceHeaderContains, anyResourceUrlContains, DetectorResult, HAR } from "../../common/index.js"

const detectCloudinary = (har: HAR, asap = true) => {
    const res: DetectorResult = {
        detected: false,
        name: 'Cloudinary',
        reasons: [],
    }

    if (anyResourceUrlContains(har, 'https://res.cloudinary.com/')) {
        res.detected = true
        res.reasons.push('resource url contains https://res.cloudinary.com/')
        if (asap) {
            return res
        }
    }

    if (anyResourceHeaderContains(har, 'server', 'cloudinary')) {
        res.detected = true
        res.reasons.push('server header mentions cloudinary')
        if (asap) {
            return res
        }
    }

    return res
}

export default detectCloudinary
