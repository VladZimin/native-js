const students = [
    {
        name: 'Bob',
        age: 22,
        isMarried: true,
        scores: 85
    },
    {
        name: 'Alex',
        age: 21,
        isMarried: true,
        scores: 90,
    },
    {
        name: 'Nick',
        age: 20,
        isMarried: false,
        scores: 120
    },
    {
        name: 'John',
        age: 19,
        isMarried: false,
        scores: 100
    },
    {
        name: 'Helen',
        age: 20,
        isMarried: false,
        scores: 110
    },
    {
        name: 'Ann',
        age: 20,
        isMarried: false,
        scores: 105
    },
]

const user = {
    name: 'Bob',
    age: 23,
    friends: ['Alex', 'Nick', 'John']
}

//1. Создайте поверхностную копию объекта user
let copyUser = {...user}

//Проверка:
console.log(user === copyUser) // false
console.log(user.friends === copyUser.friends) // true

//2. Полная (глубокая) копия объекта user
let deepCopyUser = {...user, friends: [...user.friends]}

//Проверка:
console.log(user === deepCopyUser) // false
console.log(user.friends === deepCopyUser.friends) // false

//3. Поверхностная копия массива students
let copyStudents = [...students]

//Проверка:
console.log(students === copyStudents) // false
console.log(students[0] === copyStudents[0]) // true

//4*. Полная (глубокая) копия массива students (map)
let deepCopyStudents = students.map(obj => ({...obj}))

//Проверка:
console.log(deepCopyStudents === students) // false
console.log(deepCopyStudents[0] === students[0]) // false

// NB!!! Далее все преобразования выполняем не модифицируя исходный массив students
// Вывод результатов - в консоль

//5. Отсортируйте копию массива deepCopyStudents по алфавиту (sort)
let sortedByName = [...deepCopyStudents].sort((a, b) => a.name.localeCompare(b.name))
console.log(sortedByName)

//5a. Отсортируйте deepCopyStudents по успеваемости(лучший идёт первым)(sort)
let sortedByScores = deepCopyStudents.sort((a, b) => b.scores - a.scores)
console.log(sortedByScores)

//6. Сформируйте массив студентов, у которых 100 и более баллов (filter)
let bestStudents = deepCopyStudents.filter(obj => obj.scores >= 100)
console.log(bestStudents)

//6a. Получите массив ("вырежьте") из трёх лучших студентов из массива deepCopyStudents (splice)
//https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/splice

let topStudents = deepCopyStudents.splice(0, 3)
console.log(topStudents)
console.log(deepCopyStudents)

//6b. Объедините массивы deepCopyStudents и topStudents так,
//чтоб сохранился порядок сортировки (spread-оператор || concat)
let newDeepCopyStudents = [...topStudents, ...deepCopyStudents]
console.log(newDeepCopyStudents)


//7. Сформируйте массив холостых студентов (filter)
let notMarriedStudents = newDeepCopyStudents.filter(obj => !obj.isMarried)
console.log(notMarriedStudents)

//8. Сформируйте массив имён студентов (map)
let studentsNames = sortedByName.map(obj => obj.name)
console.log(studentsNames)

//8a. Сформируйте строку из имён студентов, разделённых
// - пробелом (join)
// - запятой (join)
let namesWithSpace = studentsNames.join(' ')
console.log(namesWithSpace)
let namesWithComma = studentsNames.join(', ')
console.log(namesWithComma)

//9. Добавьте всем студентам свойство "isStudent" со значением true (map)
let trueStudents = students.map(obj => {
    obj.isStudent = true
    return obj
})
console.log(trueStudents)

//10. Nick женился. Выполните соответствующие преобразование массива students (map)
let studentsWithMarriedNick = students.map(obj => {
    if (obj.name === 'Nick') obj.isMarried = true
    return obj
})
console.log(studentsWithMarriedNick)

//11. Найдите студента по имени Ann (find)
let ann = students.find(obj => obj.name.toLowerCase() === 'ann')
console.log(ann)

//12. Найдите студента с самым высоким баллом (reduce)
// - c помощью reduce
// - *не испльзуя методы массивов и Math.max()*
let bestStudent = students.reduce((acc, obj) => acc.scores > obj.scores ? acc : obj)
console.log(bestStudent)

//13. Найдите сумму баллов всех студентов (reduce)

let scoresSum = students.reduce((acc, obj) => acc + obj.scores, 0)
console.log(scoresSum)
// 14. Д.З.:
// Напишите функцию addFriends, которая принимает параметром массив students
// и добавляет в каждому студенту свойство "friends",
// значением которого является массив имён всех остальных студентов из массива students,
// за исключением собственного имени студента. Т.е. в друзьях у Боба Боба быть не должно.
const addFriends = (students) => {
    const deepCopy = students.map(obj => ({...obj, friends: []}))
    for (let i = 0; i < students.length; i++) {
        deepCopy[i].friends = deepCopy.map(obj => obj.name).filter(name => name !== deepCopy[i].name)
    }
    return deepCopy
}
console.log(addFriends(students))
