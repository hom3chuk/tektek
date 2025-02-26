import { HAR, Options } from './common/index.js'
import detectAbyss from './detector/abyss/abyss.js'
import detectAkamaiNetStorage from './detector/akamaiNetStorage/akamaiNetStorage.js'
import detectApache from './detector/apache/apache.js'
import detectAPISIX from './detector/APISIX/APISIX.js'
import detectAWSCloudFront from './detector/AWSCloudFront/AWSCloudFront.js'
import detectAWSELB from './detector/AWSELB/AWSELB.js'
import detectAWSS3Server from './detector/AWSS3Server/AWSS3Server.js'
import detectAzure from './detector/azure/azure.js'
import detectBaiduWAF from './detector/baiduWAF/baiduWAF.js'
import detectBaseHTTP from './detector/baseHTTP/baseHTTP.js'
import detectBitrix from './detector/bitrix/bitrix.js'
import detectBunnyCDN from './detector/bunnyCDN/bunnyCDN.js'
import detectCaddy from './detector/caddy/caddy.js'
import detectCanny from './detector/canny/canny.js'
import detectCherryPy from './detector/cherryPy/cherryPy.js'
import detectCloudflare from './detector/cloudflare/cloudflare.js'
import detectCloudflareServer from './detector/cloudflareServer/cloudflareServer.js'
import detectCloudinary from './detector/cloudinary/cloudinary.js'
import detectDigitalproserver from './detector/digitalproserver/digitalproserver.js'
import detectDrupal from './detector/drupal/drupal.js'
import detectEngintron from './detector/engintron/engingtron.js'
import detectFastly from './detector/fastly/fastly.js'
import detectGoogleCloudPlatform from './detector/googleCloudPlatform/googleCloudPlatform.js'
import detectGoogleTagManager from './detector/googleTagManager/googleTagManager.js'
import detectGunicorn from './detector/gunicorn/gunicorn.js'
import detectH2O from './detector/H2O/H2O.js'
import detectHAProxy from './detector/HAProxy/HAProxy.js'
import detectHaravan from './detector/haravan/haravan.js'
import detectHeroku from './detector/heroku/heroku.js'
import detectHostinger from './detector/hostinger/hostinger.js'
import detectHostingerHPanel from './detector/hostingerHPanel/hostingerHPanel.js'
import detectJetty from './detector/jetty/jetty.js'
import detectLighttpd from './detector/lighttpd/lighttpd.js'
import detectLiteSpeed from './detector/liteSpeed/liteSpeed.js'
import detectMerlinCDN from './detector/merlinCDN/merlinCDN.js'
import detectMicrosoftIIS from './detector/microsoftIIS/microsoftIIS.js'
import detectNamecheapNginx from './detector/namecheapNginx/namecheapNginx.js'
import detectNaviServer from './detector/naviServer/naviServer.js'
import detectNextJS from './detector/nextJS/nextJS.js'
import detectNginx from './detector/nginx/nginx.js'
import detectOpenCMS from './detector/openCMS/openCMS.js'
import detectOpenResty from './detector/openResty/openResty.js'
import detectPagely from './detector/pagely/pagely.js'
import detectPHP from './detector/php/php.js'
import detectPlesk from './detector/plesk/plesk.js'
import detectResin from './detector/resin/resin.js'
import detectRuby from './detector/ruby/ruby.js'
import detectServiceNowADC from './detector/serviceNowADC/serviceNowADC.js'
import detectShopify from './detector/shopify/shopify.js'
import detectTornado from './detector/tornado/tornado.js'
import detectTwistedWeb from './detector/twistedWeb/twistedWeb.js'
import detectVercel from './detector/vercel/vercel.js'
import detectVirtuosoUniversalServer from './detector/virtuosoUniversalServer/virtuosoUniversalServer.js'
import detectWebflow from './detector/webflow/webflow.js'
import detectWEBrick from './detector/WEBrick/WEBrick.js'
import detectWordPress from './detector/wordPress/wordPress.js'
import detectWPEngine from './detector/WPEngine/WPEngine.js'

const detectors = [
    detectAbyss,
    detectAkamaiNetStorage,
    detectApache,
    detectAPISIX,
    detectAWSELB,
    detectAzure,
    detectBaiduWAF,
    detectBaseHTTP,
    detectBitrix,
    detectBunnyCDN,
    detectCaddy,
    detectCanny,
    detectCherryPy,
    detectCloudflare,
    detectCloudflareServer,
    detectAWSCloudFront,
    detectCloudinary,
    detectDigitalproserver,
    detectDrupal,
    detectFastly,
    detectEngintron,
    detectGoogleCloudPlatform,
    detectGoogleTagManager,
    detectGunicorn,
    detectH2O,
    detectHAProxy,
    detectHaravan,
    detectHeroku,
    detectHostinger,
    detectHostingerHPanel,
    detectJetty,
    detectLighttpd,
    detectLiteSpeed,
    detectMerlinCDN,
    detectMicrosoftIIS,
    detectNamecheapNginx,
    detectNaviServer,
    detectNextJS,
    detectOpenCMS,
    detectOpenResty,
    detectPagely,
    detectPHP,
    detectPlesk,
    detectResin,
    detectRuby,
    detectAWSS3Server,
    detectServiceNowADC,
    detectTornado,
    detectTwistedWeb,
    detectVercel,
    detectVirtuosoUniversalServer,
    detectWebflow,
    detectWEBrick,
    detectWordPress,
    detectWPEngine,
    detectNginx,
    detectShopify,
]

export const detect = (har: HAR, options?: Options) => {
    const opt: Options = {
        asap: true,
        foundOnly: true,
        ...options
    }
    let res = detectors.map(d => d(har, opt.asap))

    if (opt.foundOnly) {
        res = res.filter(d => d.detected)
    }

    return res
}
