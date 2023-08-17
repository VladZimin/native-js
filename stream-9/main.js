const delay = (ms) => {
    return new Promise( (resolve, reject) => {
        setTimeout(resolve, ms)
    })
}

delay(5000).then( res => console.log('Done'))