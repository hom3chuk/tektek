import { HAR, Options } from './common/index.js'
import detectAkamaiNetSttorage from './detector/akamaiNetStorage/akamaiNetStorage.js'
import detectNginx from './detector/nginx/nginx.js'
import detectShopify from './detector/shopify/shopify.js'

const detectors = [
    detectAkamaiNetSttorage,
    detectNginx,
    detectShopify,
]

const detect = (har: HAR, options?: Options) => {
    const opt: Options = {
        asap: true,
        foundOnly: true,
        ...options
    }
    let res = detectors.map(d => d(har, opt.asap))

    if (opt.foundOnly) {
        res = res.filter(d => d.detected)
    }
}

export default detect
