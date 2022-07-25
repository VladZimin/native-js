const todoListID_1 = 'wewq'
const todoListID_2 = 'gefgd'

const todoLists = [
    {
        id: todoListID_1,
        title: 'What to do!',
        filter: 'all',
        count: 1
    },
    {
        id: todoListID_2,
        title: 'What to buy!',
        filter: 'all',
        count: 43
    },
    {
        id: todoListID_2,
        title: 'what to buy!',
        filter: 'all',
        count: 9
    },
    {
        id: todoListID_2,
        title: 'AWhat to buy!',
        filter: 'all',
        count: 7
    }
]

console.log([...todoLists].sort((a, b) => a.count - b.count))
console.log([...todoLists].sort((a, b) => a.title.localeCompare(b.title)))

const nums = [23, 534, 134, 64, 23]

for (let i = 0; i < nums.length - 1; i++) {
    let isSorted = true
    for (let j = 0; j < nums.length - 1 - i; j++) {
        if (nums[j] > nums[j + 1]) {
            isSorted = false;
            [nums[j + 1], nums[j]] = [nums[j], nums[j + 1]]
        }
    }
    if (isSorted) break
}

console.log(nums)
