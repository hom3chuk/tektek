import { DetectorResult, HAR, rootHeaderContains, rootHeaderEquals } from "../../common/index.js"

const detectShopify = (har: HAR, asap = true) => {
    const res: DetectorResult = {
        detected: false,
        name: 'Shopify',
        reasons: [],
    }

    if (rootHeaderContains(har, 'link', 'https://cdn.shopify.com')) {
        res.detected = true
        res.reasons.push('has preload header')
        if (asap) {
            return res
        }
    }

    if (rootHeaderEquals(har, 'powered-by', 'shopify')) {
        res.detected = true
        res.reasons.push('has powered-by header')
        if (asap) {
            return res
        }
    }

    return res
}

export default detectShopify
