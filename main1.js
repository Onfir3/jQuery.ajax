window.jQuery.ajax = function ({ url, method, body }) {
    return new promise(function (resolve, reject) {
        let Aa = new XMLHttpRequest()
        Aa.open(method, url)
        Aa.onreadystatechange = () => {
            if (Aa.readyState === 4) {
                if (Aa.status >= 200) {
                    resolve.call(undefined, Aa.responseText)
                } else if (Aa.status >= 400) {
                    reject.call(undefined, Aa)
                }
            }
        }
        Aa.send(body)
    })
}


myButton.addEventListener('click', (e) => {
    window.jQuery.ajax({
        url: '/xxx',
        method: 'post',
        body: 'a1&b2',
    }).then((Text) => {console.log(Text)},(Aa) => { console.log(Aa) })
})