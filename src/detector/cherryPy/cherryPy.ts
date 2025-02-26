import { DetectorResult, HAR, rootHeaderContains } from "../../common/index.js"

const detectCherryPy = (har: HAR, asap = true) => {
    const res: DetectorResult = {
        detected: false,
        name: 'CherryPy',
        reasons: [],
    }

    if (rootHeaderContains(har, 'server', 'cherrypy')) {
        res.detected = true
        res.reasons.push('server header mentions cherrypy')
        if (asap) {
            return res
        }
    }

    return res
}

export default detectCherryPy
