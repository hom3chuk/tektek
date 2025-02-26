import { DetectorResult, HAR, rootHeaderContains } from "../../common/index.js"

const detectServiceNowADC = (har: HAR, asap = true) => {
    const res: DetectorResult = {
        detected: false,
        name: 'ServiceNow ADC',
        reasons: [],
    }

    if (rootHeaderContains(har, 'server', 'snow_adc')) {
        res.detected = true
        res.reasons.push('server header mentions snow_adc')
        if (asap) {
            return res
        }
    }

    return res
}

export default detectServiceNowADC
