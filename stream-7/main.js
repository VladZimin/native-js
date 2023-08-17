//1. Реализуйте функцию, которая принимает параметром подсторку, число повторов и разделитель, а возвращает сторку, состоящую из указанного количества повторов подстроки с использованием разделителя.
// repeatString("yo", 3, " ") => "yo yo yo"
// repeatString("yo", 3, ",") => "yo,yo,yo"
// for или str.repeat()

const repeatString = (str, count, separator) => {
    const newStr = str + separator
    return newStr.repeat(count).slice(0, -1)
}
console.log(repeatString('yo', 3, '|'))


//2. Реализуйте функцию, которая принимает параметром сторку и подстроку, а возвращает true, если строка начинается с
// указанной подстроки, в противном случае - false. Регистр не учитывается.
// checkStart("Incubator", "inc") => true
// checkStart("Incubator", "yo") => false
// str.startWith() slice indexOF

const checkStart = (str, subStr) => {
    return str.toLowerCase().startsWith(subStr.toLowerCase())
}

console.log(checkStart('Inca', 'inc'))

//3. Реализуйте функцию, которая принимает параметром строку и число (количество символов), а возвращает строку из
// параметров, обрезанную до указанного количества символов и завершает её многоточием.
//truncateString("Всем студентам инкубатора желаю удачи!", 10) => "Всем студе..."

const truncateString = (str, count) => {
    return str.slice(0, count) + '...'
}
console.log(truncateString('123456789-11234214214', 9))

//4. Реализуйте функцию, которая принимает параметром сторку (предложение) и возвращает самое короткое слово в
// предложении, если в параметрах пустая строка, то возвращает null.
// getMinLengthWord("Всем студентам инкубатора желаю удачи!") => "Всем"
// getMinLengthWord("") => null
// split()

const getMinLengthWord = str => {
    if (str.trim()) {
        return str.split(' ').sort((a, b) => a.length - b.length)[0]
    }

    return null
}
console.log(getMinLengthWord('dfd dfd ds wewe ds'))

//5. Реализуйте функцию, которая принимает параметром сторку (предложение) и возвращает то же предложение, где все слова написаны строчными, но начинаются с заглавных букв.
// setUpperCase("всем стУдентам инкуБатора Желаю удачИ!") => "Всем Студентам Инкубатора Желаю Удачи!"

const setUpperCase = (str) => {
    return str.toLowerCase().split(' ').map(el => el.charAt(0).toUpperCase() + el.slice(1)).join(' ')
}
console.log(setUpperCase('всем стУдентам инкуБатора Желаю удачИ!'))
// !!!!!!!!!!!!!!!!!!После решения 5 задач - поднимаем руку!!!!!!!!

//6. Реализуйте функцию, котрая принимает параметрами строку и подстроку. Если все
// символы подстроки содержаться в стороке - возвращает true, если нет -
// возвращает false. Проверка проводится без учёта регистра и без учётом
// повторяющихся символов.
//* попробовать учитывать повтор символов в подстроке

// isIncludes("Incubator", "Cut") => true
// isIncludes("Incubator", "table") => false
// isIncludes("Incubator", "inbba") => true
// isIncludes("Incubator", "inba") => true
// isIncludes("Incubator", "Incubatorrr")=> true`

const isIncludes = (str, subStr) => {
    let count = 0
    const arr = subStr.toLowerCase().split('')
    for (let i = 0; i < arr.length; i++) {
        if (str.toLowerCase().includes(arr[i])) {
            count++
        }
    }
    return count === arr.length
}

console.log(isIncludes('Incubator', 'table'))


