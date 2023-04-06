const todoListID_1 = 'wewq'
const todoListID_2 = 'gefgd'


const todoLists = [
    {
        id: todoListID_1,
        title: 'What to do!',
        filter: 'all'
    },
    {
        id: todoListID_2,
        title: 'What to buy!',
        filter: 'all'
    }
]

const tasks = {
    [todoListID_1]: [
        {id: 1, title: 'JS', isDone: false},
        {id: 2, title: 'HTML', isDone: false},
        {id: 3, title: 'REACT', isDone: false},
    ],
    [todoListID_2]: [
        {id: 1, title: 'Milk', isDone: false},
        {id: 2, title: 'Ice-cream', isDone: false},
        {id: 3, title: 'Apples', isDone: false},
    ],
}

console.log(tasks[todoListID_2][1].title)

const arr = [1, 2, 3, 4, 5]

console.log(arr.reduce((acc, num) => acc + num))
console.log(todoLists.reduce((acc, obj) => {
    acc[obj.id] = obj
    delete acc[obj.id].id
    return acc
}, {}))

