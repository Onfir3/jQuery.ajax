window.jQuery.ajax = function ({ url, method, body, successFn, failFn }) {
    let Aa = new XMLHttpRequest()
    Aa.open(method, url)
    Aa.onreadystatechange = () => {
        if (Aa.readyState === 4) {
            if (Aa.status >= 200) {
                successFn.call(undefined, Aa.responseText)
            } else if (Aa.status >= 400) {
                failFn.call(undefined, Aa)
            }
        }
    }
    Aa.send(body)
}

window.$ = window.jQuery

myButton.addEventListener('click', (e) => {
    window.jQuery.ajax({
        url: '/xxx',
        method: 'post',
        body: 'a1&b2',
        successFn: (Aa.responseText) => { console.log(Aa.responseText) },
        failFn: (Aa) => { console.log(Aa) }
    })
})