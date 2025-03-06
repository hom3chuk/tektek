# tektek
A library for detecting technologies used within HTTP Archive (HAR)

## List of tracked technologies

Abyss, Adobe Fonts, Apache Web Server, APISIX, AWS CloudFront, AWS ELB, AWS Lambda, AWS S3 Server, Axeptio, Azure, Baidu WAF, BaseHTTP, Bitrix, Bunny CDN, Caddy, Canny, CherryPy, Cloudflare, Cloudflare Server, Cloudinary, Digitalproserver, Drupal, Engintron, Facebook SDK, Fastly, FoxyCart, Google Ads, Google Analytics, Google Compute Engine, Google Fonts, Google ReCAPTCHA, Google Tag Manager, gunicorn, H2O, HAProxy, Haravan, Heroku, Hostinger, Hostinger hPanel, Jetty, Joomla!, jQuery, lighttpd, LiteSpeed, Matomo, Merlin CDN, Microsoft IIS, Namecheap nginx, NaviServer, Next.js, Nginx, OpenCMS, OpenResty, Pagely, Parsely, Parsely WP plugin, PHP, Plesk, Prismic, Protecht, React, Resin, Ruby, Sentry.io, ServiceNow ADC, Shopify, Spektrix, Stripe, Swiper JS, Taboola, Tornado, Trustpilot, Twisted Web, Vercel, Virtuoso Universal Server, Webflow, Webpack, WEBrick, WordPress, WP Engine, Zope

## Installation

### npm

```
npm i @hom3chuk/tektek
```

### yarn

```
yarn add @hom3chuk/tektek
```

## Usage

### Import

#### commonjs

```
const tektek = require('@hom3chuk/tektek')
const fs = require('fs')

const detect = tektek.detect

const har = JSON.parse(fs.readFileSync('example.har').toString())

const de = detect(har)

console.log(de)
```

#### module

```
import { detect } from '@hom3chuk/tektek'
import * as fs from 'fs'

const har = JSON.parse(fs.readFileSync('example.har').toString())

const de = detect(har)

console.log(de)
```

### Options

You can run `detect` with additional options:
```
import { detect } from '@hom3chuk/tektek'
import * as fs from 'fs'

const har = JSON.parse(fs.readFileSync('example.har').toString())

const de = detect(har, {
    asap: false,
    foundOnly: false,
})

console.log(de)
```

#### asap

Default is `true`

Setting `asap` to true will prevent detectors from running through all of the rules as soon as the first match is found. Useful when you want a binary result for each technology. Each detector will return at most one `reason`:

```
[
  {
    detected: true,
    name: 'Shopify',
    reasons: [ 'has preload header' ]
  }
]
```

Setting `asap` to false will enforce detectors to run through all of the rules, even after the first match. Useful when you need as extensive of a profile as defined by the rules. Each detector can return multiple reasons:

```
[
  {
    detected: true,
    name: 'Shopify',
    reasons: [ 'has preload header', 'has powered-by header' ]
  }
]
```

#### foundOnly

Default is `true`

Setting `foundOnly` to `true` will filter the results to only contain entries with positive detections:

```
[
  {
    detected: true,
    name: 'Shopify',
    reasons: [ 'has preload header' ]
  }
]

```

Setting `foundOnly` to `false` will return all of the detectors results available, even those that were not found:

```
[
  { detected: false, name: 'Akamai Net Storage', reasons: [] },
  { detected: false, name: 'nginx', reasons: [] },
  {
    detected: true,
    name: 'Shopify',
    reasons: [ 'has preload header' ]
  }
]

```
