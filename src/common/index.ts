export const getRoot = (har: HAR): Entry | null => {
    const res = null
    const entries = har.log.entries
    for (let i = 0; i < entries.length; i++) {
        if ((entries[i].response.status === 200 || entries[i].response.status === 304) && entries[i].response.content.mimeType === 'text/html') {
            return entries[i]
        }
    }
    return res
}

export const getRootBody = (har: HAR): string | null => {
    let res: string | null = null
    const root = getRoot(har)
    if (root) {
        res = root.response.content.text
    }
    return res
}

export const getRootHeaders = (har: HAR): NameValue[] | null => {
    let res: NameValue[] | null = null
    const root = getRoot(har)
    if (root) {
        res = root.response.headers
    }
    return res
}

export const rootBodyContains = (har: HAR, value: string): boolean => {
    let res: boolean = false
    const rootBody = getRootBody(har)
    if (rootBody.indexOf(value) !== -1) {
        return true
    }
    return res
}

export const rootHeaderEquals = (har: HAR, header: string, value: string): boolean => {
    let res: boolean = false
    const rootHeaders = getRootHeaders(har)
    for (let i = 0; i < rootHeaders.length; i++) {
        if (rootHeaders[i].name.toLowerCase() === header.toLowerCase() && rootHeaders[i].value.toLowerCase() === value.toLowerCase()) {
            return true
        }
    }
    return res
}

export const anyResourceHeaderEquals = (har: HAR, header: string, value: string): boolean => {
    let res: boolean = false
    for (let i = 0; i < har.log.entries.length; i++) {
        const currentHeaders = har.log.entries[i].response.headers
        for (let j = 0; j < currentHeaders.length; j++) {
            if (currentHeaders[j].name.toLowerCase() === header.toLowerCase() && currentHeaders[j].value.toLowerCase() === value.toLowerCase()) {
                return true
            }
        }
    }
    return res
}

export const anyResourceHeaderContains = (har: HAR, header: string, value: string): boolean => {
    let res: boolean = false
    for (let i = 0; i < har.log.entries.length; i++) {
        const currentHeaders = har.log.entries[i].response.headers
        for (let j = 0; j < currentHeaders.length; j++) {
            if (
                (currentHeaders[j].name.toLowerCase() === header.toLowerCase())
                && (currentHeaders[j].value.toLowerCase().indexOf(value.toLowerCase()) !== -1)
            ) {
                return true
            }
        }
    }
    return res
}

export const anyCssResourceContentContains = (har: HAR, value: string, searchLimit: number | undefined = undefined): boolean => {
    let res: boolean = false
    for (let i = 0; i < har.log.entries.length; i++) {
        if (har.log.entries[i].response.content.mimeType.toLowerCase() !== 'text/css') {
            continue
        }
        if (
            har.log.entries[i].response.content.text &&
            ((searchLimit && har.log.entries[i].response.content.text.substring(0, searchLimit).indexOf(value) !== -1)
            || (!searchLimit && har.log.entries[i].response.content.text.indexOf(value) !== -1))
        ) {
            return true
        }
    }
    return res
}

export const anyJavascriptResourceContentContains = (har: HAR, value: string, searchLimit: number | undefined = undefined): boolean => {
    let res: boolean = false
    for (let i = 0; i < har.log.entries.length; i++) {
        if (har.log.entries[i].response.content.mimeType.toLowerCase() !== 'text/javascript') {
            continue
        }
        if (
            har.log.entries[i].response.content.text &&
            ((searchLimit && har.log.entries[i].response.content.text.substring(0, searchLimit).indexOf(value) !== -1)
            || (!searchLimit && har.log.entries[i].response.content.text.indexOf(value) !== -1))
        ) {
            return true
        }
    }
    return res
}

export const anyResourceUrlContains = (har: HAR, value: string): boolean => {
    let res: boolean = false
    for (let i = 0; i < har.log.entries.length; i++) {
        if (har.log.entries[i].request.url.toLowerCase().indexOf(value.toLowerCase()) !== -1) {
            return true
        }
    }
    return res
}

export const anyResourceUrlRegex = (har: HAR, value: RegExp): boolean => {
    let res: boolean = false
    for (let i = 0; i < har.log.entries.length; i++) {
        if (value.exec(har.log.entries[i].request.url.toLowerCase())) {
            return true
        }
    }
    return res
}

export const rootHeaderContains = (har: HAR, header: string, value: string): boolean => {
    let res: boolean = false
    const rootHeaders = getRootHeaders(har)
    for (let i = 0; i < rootHeaders.length; i++) {
        if (
            (rootHeaders[i].name.toLowerCase() === header.toLowerCase())
            && (rootHeaders[i].value.toLowerCase().indexOf(value.toLowerCase()) !== -1)
        ) {
            return true
        }
    }
    return res
}

export const rootAnyHeaderContains = (har: HAR, value: string): boolean => {
    let res: boolean = false
    const rootHeaders = getRootHeaders(har)
    for (let i = 0; i < rootHeaders.length; i++) {
        if (rootHeaders[i].value.toLowerCase().indexOf(value.toLowerCase()) !== -1) {
            return true
        }
    }
    return res
}

export const rootHeaderExists = (har: HAR, header: string): boolean => {
    let res: boolean = false
    const rootHeaders = getRootHeaders(har)
    for (let i = 0; i < rootHeaders.length; i++) {
        if (rootHeaders[i].name.toLowerCase() === header.toLowerCase()) {
            return true
        }
    }
    return res
}

export const anyResourceHeaderExists = (har: HAR, header: string): boolean => {
    let res: boolean = false
    for (let i = 0; i < har.log.entries.length; i++) {
        const currentHeaders = har.log.entries[i].response.headers
        for (let j = 0; j < currentHeaders.length; j++) {
            if (currentHeaders[j].name.toLowerCase() === header.toLowerCase()) {
                return true
            }
        }
    }
    return res
}

export const anyResourceAnyHeadersContain = (har: HAR, value: string): boolean => {
    let res: boolean = false
    for (let i = 0; i < har.log.entries.length; i++) {
        const currentHeaders = har.log.entries[i].response.headers
        for (let j = 0; j < currentHeaders.length; j++) {
            if (currentHeaders[j].value.toLowerCase().indexOf(value.toLowerCase()) !== -1) {
                return true
            }
        }
    }
    return res
}

type NameValue = {
    name: string,
    value: string,
}

type Request = {
    method: string,
    url: string,
    httpVersion: string,
    cookies: NameValue[],
    headers: NameValue[],
    queryString: NameValue[] | [],
    headersSize: number,
    bodySize: number,
}

type Content = {
    size: number,
    mimeType: string,
    text: string,
}

type Response = {
    status: number,
    statusText: string,
    httpVersion: string,
    cookies: NameValue[],
    headers: NameValue[],
    redirectURL: string,
    headersSize: number,
    bodySize: number,
    _transferSize?: number,
    content: Content,
}

type Creator = {
    name: string,
    version: string,
    comment?: string,
}

type PageTimings = {
    onContentLoad: number,
    onLoad: number,
}

type Page = {
    id: string,
    title: string,
    startedDateTime: string,
    pageTimings: PageTimings,
}

type EntryTimings = {
    blocked: number,
    dns: number,
    connect: number,
    send: number,
    wait: number,
    receive: number,
    ssl: number,
}

type Initiator = {
    type: string,
}

type Entry = {
    pageref: string,
    startedDateTime: string,
    time: number,
    request: Request,
    response: Response,
    cache: {},
    _fromDiskCache?: false,
    timings: EntryTimings,
    _securityState?: string,
    serverIPAddress: string,
    connection: string,
    _initiator?: Initiator,
    _priority?: string,
    _resourceType?: string
    _connectionId?: string,
}

type Browser = {
    name: string,
    version: string,
}

type Log = {
    version: string,
    browser?: Browser,
    creator: Creator,
    pages: Page[],
    entries: Entry[],
}

export type HAR = {
    log: Log
}

export type Options = {
    asap?: boolean,
    foundOnly?: boolean,
}

export type DetectorResult = {
    detected: boolean,
    name: string,
    reasons: string[],
    version?: string,
}
