getIp()

function getIp(){
    const ip2 = '';
    fetch('https://api.ipify.org/?format=json')
        .then(res => res.text())
        .then(
            data => { getLocation(JSON.parse(data).ip) }
        )
}

function getLocation(ip){
const url = `http://ip-api.com/json/${ip}`
const span = document.querySelector('span')

fetch(url)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
            console.log(data)
            span.innerText = data.city
        })
        .catch(err => {
            console.log(`error ${err}`)
        });
}