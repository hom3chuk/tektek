import { anyJavascriptResourceContentContains, anyResourceUrlContains, DetectorResult, HAR } from "../../common/index.js"

const detectSwiper = (har: HAR, asap = true) => {
    const res: DetectorResult = {
        detected: false,
        name: 'Swiper JS',
        reasons: [],
    }

    if (anyResourceUrlContains(har, 'https://cdn.jsdelivr.net/npm/swiper')) {
        res.detected = true
        res.reasons.push('resource url contains swiper cdn url')
        if (asap) {
            return res
        }
    }

    if (anyJavascriptResourceContentContains(har, '* https://swiperjs.com', 100)) {
        res.detected = true
        res.reasons.push('js resource contains swiper code signature')
        if (asap) {
            return res
        }
    }

    return res
}

export default detectSwiper
