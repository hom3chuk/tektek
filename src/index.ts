import { HAR, Options } from './common/index.js'
import detectAbyss from './detector/abyss/abyss.js'
import detectAdobeFonts from './detector/adobeFonts/adobeFonts.js'
import detectAimtell from './detector/aimtell/aimtell.js'
import detectAkamaiNetStorage from './detector/akamaiNetStorage/akamaiNetStorage.js'
import detectApache from './detector/apache/apache.js'
import detectAPISIX from './detector/APISIX/APISIX.js'
import detectAWSCloudFront from './detector/AWSCloudFront/AWSCloudFront.js'
import detectAWSELB from './detector/AWSELB/AWSELB.js'
import detectAWSLambda from './detector/AWSLambda/AWSLambda.js'
import detectAWSS3Server from './detector/AWSS3Server/AWSS3Server.js'
import detectAxeptio from './detector/axeptio/axeptio.js'
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
import detectConstantContact from './detector/constantContact/constantContact.js'
import detectDatadog from './detector/datadog/datadog.js'
import detectDigitalproserver from './detector/digitalproserver/digitalproserver.js'
import detectDrupal from './detector/drupal/drupal.js'
import detectEngintron from './detector/engintron/engingtron.js'
import detectFacebookSDK from './detector/facebookSDK/facebookSDK.js'
import detectFastly from './detector/fastly/fastly.js'
import detectFontAwesome from './detector/fontAwesome/fontAwesome.js'
import detectFoxyCart from './detector/foxyCart/foxyCart.js'
import detectGoogleAds from './detector/googleAds/googleAds.js'
import detectGoogleAnalytics from './detector/googleAnalytics/googleAnalytics.js'
import detectGoogleComputeEngine from './detector/googleComputeEngine/googleComputeEngine.js'
import detectGoogleFonts from './detector/googleFonts/googleFonts.js'
import detectGoogleReCAPTCHA from './detector/googleReCAPTCHA/googleReCAPTCHA.js'
import detectGoogleTagManager from './detector/googleTagManager/googleTagManager.js'
import detectGunicorn from './detector/gunicorn/gunicorn.js'
import detectH2O from './detector/H2O/H2O.js'
import detectHAProxy from './detector/HAProxy/HAProxy.js'
import detectHaravan from './detector/haravan/haravan.js'
import detectHeroku from './detector/heroku/heroku.js'
import detectHostinger from './detector/hostinger/hostinger.js'
import detectHostingerHPanel from './detector/hostingerHPanel/hostingerHPanel.js'
import detectHotjar from './detector/hotjar/hotjar.js'
import detectIterable from './detector/iterable/iterable.js'
import detectJetty from './detector/jetty/jetty.js'
import detectJoomla from './detector/joomla/joomla.js'
import detectJQuery from './detector/jquery/jquery.js'
import detectKlaviyo from './detector/klaviyo/klaviyo.js'
import detectLightboxJS from './detector/lightboxJS/lightboxJS.js'
import detectLighttpd from './detector/lighttpd/lighttpd.js'
import detectLiteSpeed from './detector/liteSpeed/liteSpeed.js'
import detectMatomo from './detector/matomo/matomo.js'
import detectMerlinCDN from './detector/merlinCDN/merlinCDN.js'
import detectMicrosoftIIS from './detector/microsoftIIS/microsoftIIS.js'
import detectNamecheapNginx from './detector/namecheapNginx/namecheapNginx.js'
import detectNaviServer from './detector/naviServer/naviServer.js'
import detectNextJS from './detector/nextJS/nextJS.js'
import detectNginx from './detector/nginx/nginx.js'
import detectNorthbeam from './detector/northbeam/northbeam.js'
import detectOpenCMS from './detector/openCMS/openCMS.js'
import detectOpenResty from './detector/openResty/openResty.js'
import detectPagely from './detector/pagely/pagely.js'
import detectParsely from './detector/parsely/parsely.js'
import detectPHP from './detector/php/php.js'
import detectPlesk from './detector/plesk/plesk.js'
import detectPodscribe from './detector/podscribe/podscribe.js'
import detectPrismic from './detector/prismic/prismic.js'
import detectProtecht from './detector/protecht/protecht.js'
import detectReact from './detector/react/react.js'
import detectRefersion from './detector/refersion/refersion.js'
import detectResin from './detector/resin/resin.js'
import detectRuby from './detector/ruby/ruby.js'
import detectSentry from './detector/sentry/sentry.js'
import detectServiceNowADC from './detector/serviceNowADC/serviceNowADC.js'
import detectShopify from './detector/shopify/shopify.js'
import detectSpektrix from './detector/spektrix/spektrix.js'
import detectSplunk from './detector/splunk/splunk.js'
import detectStripe from './detector/stripe/stripe.js'
import detectSwiper from './detector/swiperjs/swiperjs.js'
import detectTaboola from './detector/taboola/taboola.js'
import detectTornado from './detector/tornado/tornado.js'
import detectTrustpilot from './detector/trustpilot/trustpilot.js'
import detectTwistedWeb from './detector/twistedWeb/twistedWeb.js'
import detectUnpkg from './detector/unpkg/unpkg.js'
import detectUsercentricsCookiebot from './detector/usercentricsCookiebot/usercentricsCookiebot.js'
import detectVercel from './detector/vercel/vercel.js'
import detectVirtuosoUniversalServer from './detector/virtuosoUniversalServer/virtuosoUniversalServer.js'
import detectWebflow from './detector/webflow/webflow.js'
import detectWebpack from './detector/webpack/webpack.js'
import detectWEBrick from './detector/WEBrick/WEBrick.js'
import detectWisernotify from './detector/wisernotify/wisernotify.js'
import detectWistia from './detector/wistia/wistia.js'
import detectWordPress from './detector/wordPress/wordPress.js'
import detectWPEngine from './detector/WPEngine/WPEngine.js'
import detectWPParsely from './detector/WPParsely/WPParsely.js'

const detectors = [
    detectAbyss,
    detectAdobeFonts,
    detectAimtell,
    detectAkamaiNetStorage,
    detectApache,
    detectAPISIX,
    detectAWSCloudFront,
    detectAWSELB,
    detectAWSLambda,
    detectAWSS3Server,
    detectAxeptio,
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
    detectCloudinary,
    detectConstantContact,
    detectDatadog,
    detectDigitalproserver,
    detectDrupal,
    detectFacebookSDK,
    detectFastly,
    detectFontAwesome,
    detectFoxyCart,
    detectEngintron,
    detectGoogleAds,
    detectGoogleAnalytics,
    detectGoogleComputeEngine,
    detectGoogleFonts,
    detectGoogleReCAPTCHA,
    detectGoogleTagManager,
    detectGunicorn,
    detectH2O,
    detectHAProxy,
    detectHaravan,
    detectHeroku,
    detectHostinger,
    detectHostingerHPanel,
    detectHotjar,
    detectIterable,
    detectJetty,
    detectJoomla,
    detectJQuery,
    detectKlaviyo,
    detectLightboxJS,
    detectLighttpd,
    detectLiteSpeed,
    detectMatomo,
    detectMerlinCDN,
    detectMicrosoftIIS,
    detectNamecheapNginx,
    detectNaviServer,
    detectNextJS,
    detectNorthbeam,
    detectOpenCMS,
    detectOpenResty,
    detectPagely,
    detectParsely,
    detectPHP,
    detectPlesk,
    detectPodscribe,
    detectPrismic,
    detectProtecht,
    detectReact,
    detectRefersion,
    detectResin,
    detectRuby,
    detectSentry,
    detectServiceNowADC,
    detectSpektrix,
    detectSplunk,
    detectStripe,
    detectSwiper,
    detectTaboola,
    detectTornado,
    detectTrustpilot,
    detectTwistedWeb,
    detectUnpkg,
    detectUsercentricsCookiebot,
    detectVercel,
    detectVirtuosoUniversalServer,
    detectWebflow,
    detectWebpack,
    detectWEBrick,
    detectWisernotify,
    detectWistia,
    detectWordPress,
    detectWPEngine,
    detectWPParsely,
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
