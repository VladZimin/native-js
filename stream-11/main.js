const server = {
    getData () {
        return new Promise( (res, rej) => {
            setTimeout(() => {
                res('Promise resolved!')
               //rej('Something wrong')
            }, 2000)
        })
    }
}

const pr = server.getData()

pr
    .then( data => console.log('DATA', data))
    .catch(err => console.log('ERROR', err))