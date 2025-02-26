import { anyResourceHeaderContains, DetectorResult, HAR } from "../../common/index.js"

const detectCloudinary = (har: HAR, asap = true) => {
    const res: DetectorResult = {
        detected: false,
        name: 'Cloudinary',
        reasons: [],
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
