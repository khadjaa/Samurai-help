let axios = {
    get() {
        return pr = new Promise((res, rej) => {
            setTimeout(() => {
                res('data')
            }, 3000)
        })
    }
}

axios.get()
    .then(data => console.log(data))
    .then(() => {console.log('1')})
    .catch(er => console.error(er))

