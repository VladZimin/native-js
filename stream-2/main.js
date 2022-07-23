const users = [
    {
        name: 'Vladislav',
        age: 25,
        email: 'vlad.zimin1@gmail.com'
    },
    {
        name: 'Vladislav',
        age: 21,
        email: 'vlad.zimin1@gmail.com'
    },
    {
        name: 'Vladislav',
        age: 42,
        email: 'vlad.zimin1@gmail.com'
    },
    {
        name: 'Vladislav',
        age: 65,
        email: 'vlad.zimin1@gmail.com'
    }
]

const myFilter = (arr, fn) => {
    const res = []
    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i]) === true) res.push(arr[i])
    }
    return res
}

console.log(myFilter(users, u => u.age > 30))

const myMap = (arr, fn) => {
    const res = []
    for (let i = 0; i < arr.length; i++) {
        const newValue = fn(arr[i])
        res.push(newValue)
    }

    return res
}

console.log(myMap(users, u => u.age))


