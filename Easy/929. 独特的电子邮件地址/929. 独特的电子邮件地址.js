/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function(emails) {
    let st = new Set()
    for (let i = 0; i < emails.length; i++) {
        let res = emails[i].replace(/\.(?=.+?@)/g, '').replace(/\+.+(?=@)/, '')
        st.add(res)
    }
    return st.size
};