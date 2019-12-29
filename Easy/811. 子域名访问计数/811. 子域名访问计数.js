/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */
var subdomainVisits = function(cpdomains) {
    const domainsMap = new Map()
    for (const cpdomain of cpdomains) {
        const numStr = cpdomain.match(/\d+\s/)[0]
        const val = parseInt(numStr.trim())
        let url = cpdomain.replace(/\d+\s/, '')
        while (url) {
            const mapVal = domainsMap.get(url) ? domainsMap.get(url) : 0
            domainsMap.set(url, mapVal + val)
            url = url.replace(/^[a-zA-Z]+\.?/, '')
        }
    }
    const res = []
    for (const [key, val] of domainsMap) {
        res.push(`${val} ${key}`)
    }
    return res
};