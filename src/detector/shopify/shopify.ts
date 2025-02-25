import { DetectorResult, getRootHeaders, HAR } from "../../common/index.js"

const detectShopify = (har: HAR, asap = true) => {
    const res: DetectorResult = {
        detected: false,
        reasons: [],
    }
    const rootHeaders = getRootHeaders(har)

    const hasPreloadCdnHeader = rootHeaders?.filter(h => h.name.toLowerCase() === 'link').pop()?.value.toLowerCase().indexOf('https://cdn.shopify.com') !== -1

    if (hasPreloadCdnHeader) {
        res.detected = true
        res.reasons.push('has preload header')
        if (asap) {
            return res
        }
    }

    const hasPoweredByHeader = rootHeaders?.filter(h => h.name.toLowerCase() === 'powered-by').pop()?.value.toLowerCase().indexOf('shopify') !== -1

    if (hasPoweredByHeader) {
        res.detected = true
        res.reasons.push('has powered-by header')
        if (asap) {
            return res
        }
    }

    return res
}

export default detectShopify
