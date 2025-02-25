export const getRoot = (har: HAR): Entry | null => {
    const res = null
    const entries = har.log.entries
    for (let i = 0; i < entries.length; i++) {
        if (entries[i].response.status === 200 && entries[i].response.content.mimeType === 'text/html') {
            return entries[i]
        }
    }
    return res
}

export const getRootBody = (har: HAR): String | null => {
    let res: String | null = null
    const root = getRoot(har)
    if (root) {
        res = root.response.content.text
    }
    return res
}

export const getRootHeaders = (har: HAR): NameValue[] | null => {
    let res: NameValue[] | null  = null
    const root = getRoot(har)
    if (root) {
        res = root.response.headers
    }
    return res
}

type NameValue = {
    name: String,
    value: String,
}

type Request = {
    method: String,
    url: String,
    httpVersion: String,
    cookies: NameValue[],
    headers: NameValue[],
    queryString: NameValue[],
    headersSize: Number,
    bodySize: Number,
}

type Content = {
    size: Number,
    mimeType: String,
    text: String,
}

type Response = {
    status: Number,
    statusText: String,
    httpVersion: String,
    cookies: NameValue[],
    headers: NameValue[],
    redirectURL: String,
    headersSize: Number,
    bodySize: Number,
    _transferSize: Number,
    content: Content,
}

type Creator = {
    name: String,
    version: String,
    comment: String,
}

type PageTimings = {
    onContentLoad: Number,
    onLoad: Number,
}

type Page = {
    id: String,
    title: String,
    startedDateTime: String,
    pageTimings: PageTimings,
}

type EntryTimings = {
    blocked: Number,
    dns: Number,
    connect: Number,
    send: Number,
    wait: Number,
    receive: Number,
    ssl: Number,
}

type Initiator = {
    type: String,
}

type Entry = {
    pageref: String,
    startedDateTime: String,
    time: Number,
    request: Request,
    response: Response,
    cache: {},
    _fromDiskCache: false,
    timings: EntryTimings,
    serverIPAddress: String,
    connection: String,
    _initiator: Initiator,
    _priority: String,
    _resourceType: String
}

type Log = {
    version: String,
    creator: Creator,
    pages: Page[],
    entries: Entry[],
}

export type HAR = {
    log: Log
}

export type DetectorResult = {
    detected: Boolean,
    reasons: String[],
    version?: String,
}
