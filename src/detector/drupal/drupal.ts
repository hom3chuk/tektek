import { DetectorResult, HAR, rootHeaderContains, rootHeaderExists } from "../../common/index.js"

const detectDrupal = (har: HAR, asap = true) => {
    const res: DetectorResult = {
        detected: false,
        name: 'Drupal',
        reasons: [],
    }

    if (rootHeaderContains(har, 'x-generator', 'drupal')) {
        res.detected = true
        res.reasons.push('x-generator header mentions drupal')
        if (asap) {
            return res
        }
    }

    if (rootHeaderExists(har, 'x-drupal-cache')) {
        res.detected = true
        res.reasons.push('x-drupal-cache header exists')
        if (asap) {
            return res
        }
    }

    if (rootHeaderExists(har, 'x-drupal-dynamic-cache')) {
        res.detected = true
        res.reasons.push('x-drupal-dynamic-cache header exists')
        if (asap) {
            return res
        }
    }

    return res
}

export default detectDrupal
