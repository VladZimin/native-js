var color = 'black'

const car =  {
    color: 'red',
    a:  () => {
        console.log(this.color)
    },
    showColor() {
        this.a()
    }
}

car.showColor()
