import { anyCssResourceContentContains, DetectorResult, HAR, rootBodyContains, rootHeaderContains } from "../../common/index.js"

const detectTailwindCss = (har: HAR, asap = true) => {
    const res: DetectorResult = {
        detected: false,
        name: 'Tailwind CSS',
        reasons: [],
    }

    if (rootBodyContains(har, '--tw-')) {
        res.detected = true
        res.reasons.push('tailwind class prefix present in document body')
        if (asap) {
            return res
        }
    }

    if (anyCssResourceContentContains(har, 'tailwindcss v')) {
        res.detected = true
        res.reasons.push('tailwind license present in a css resource')
        if (asap) {
            return res
        }
    }

    return res
}

export default detectTailwindCss
