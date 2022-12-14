import axios from "axios"
import { CHOISE_KEY, getData } from "../../../../data/localMemory"
import { getWord } from "../../../../data/words"

export default async function Enter(func: Function) {
    const items = document.querySelectorAll('.field-item')
    const filtered = Array.from(items).filter(i => i.classList.length == 1).filter(f => f.innerHTML != '')
    let result: null | boolean = null
    if (filtered.length == 5) {
        const end = gameEnd(items)
        let word = ''
        filtered.forEach((val) => {
            word += val.innerHTML
        })
        console.log(word)
        filtered.forEach((value) => {
            value.classList.add('is-fetching')
        })
        console.log(CHOISE_KEY)

        const answer = getWord(getData(CHOISE_KEY)).word 
        console.log(answer)
        if(end){
            console.log('GAME END')
            filtered.forEach((value) => {
                value.classList.remove('is-fetching')
            })
            validate(word, answer, filtered)
            answer == word ? result = true : result = false
            func(result)
            return null
        }
        if (answer == word) {
            console.log('GAME MATCH')
            filtered.forEach((value) => {
                value.classList.remove('is-fetching')
            })
            validate(word, answer, filtered)
            result = true
            func(result)
            return null
        }
        else {
            console.log('GAME NOT MATCH')
            axios.get(`${process.env.API_KEY}` + word)
                .then(d => {
                    filtered.forEach((value) => {
                        value.classList.remove('is-fetching')
                    })
                    if (d.data.existing) {
                        console.log(': EXIST')
                        validate(word, answer, filtered)
                    }
                    else {
                        console.log(': NOT EXIST')
                        for (let i = 0; i < 5; i++) {
                            filtered[i].innerHTML = ''
                        }
                    }
                })
        }
        /*
        axios.post(`${process.env.SECRET_API_KEY}`, { region: getData(CHOISE_KEY) })
            .then((d) => {
                let answer = d.data.word
                if(end){
                    filtered.forEach((value) => {
                        value.classList.remove('is-fetching')
                    })
                    validate(word, answer, filtered)
                    answer == word ? result = true : result = false
                    return null
                }
                if (answer == word) {
                    filtered.forEach((value) => {
                        value.classList.remove('is-fetching')
                    })
                    validate(word, answer, filtered)
                    result = true
                    return null
                }
                else {
                    axios.get(`${process.env.API_KEY}` + word)
                        .then(d => {
                            filtered.forEach((value) => {
                                value.classList.remove('is-fetching')
                            })
                            if (d.data.existing) {
                                let answer = ''
                                axios.post(`${process.env.SECRET_API_KEY}`, { region: getData(CHOISE_KEY) })
                                    .then((d) => {
                                        answer = d.data.word
                                        console.log(answer)
                                        validate(word, answer, filtered)
                                    })
                            }
                            else {
                                for (let i = 0; i < 5; i++) {
                                    filtered[i].innerHTML = ''
                                }
                            }
                        })
                }
            }).then(()=>{
                result != null && func(result)
            })
            */           
    }
}
function colorKeys(keys: string, colors: string[]) {
    for (let i = 0; i < 5; i++) {
        const selector = document.getElementById(keys[i])!.classList
        if (selector.length > 1)
            selector.replace(selector[1], colors[i])
        else
            selector.add(colors[i])
    }
}
function colorField(items: Element[], colors: string[]) {
    console.log(colors)
    for (let i = 0; i < 5; i++) {
        items[i].classList.add(colors[i])
    }
}
function validate(word: string, answer: string, fields: Element[]) {
    const colors = matchLetters(word, answer)
    colorField(fields, colors)
    colorKeys(word, colors)
}
function matchLetters(word: string, answer: string) {
    let array = ['', '', '', '', '']

    for (let i = 0; i < 5; i++) {
        Array.from(answer).includes(word[i]) && console.log('is-semi', word[i])
        Array.from(answer).includes(word[i]) ? array[i] = 'is-semiright' : null

    }
    for (let i = 0; i < 5; i++) {
        word[i] == answer[i] && console.log('is-right', word[i])
        word[i] == answer[i] ? array[i] = 'is-right' : null
    }
    for (let i = 0; i < 5; i++) {
        Array.from(answer).includes(word[i]) == false && console.log('is-wrong', word[i])
        Array.from(answer).includes(word[i]) == false ? array[i] = 'is-wrong' : null
    }
    let clone = []
    array.forEach((val, i) => {
        clone[i] = val
    })
    for (let i = 0; i < 5; i++) {
        if (word.indexOf(word[i]) != word.lastIndexOf(word[i]) &&
            answer.indexOf(word[i]) == answer.lastIndexOf(word[i])) {

            if (array[word.indexOf(word[i])] != array[word.lastIndexOf(word[i])]) {
                array[word.indexOf(word[i])] == 'is-semiright'
                    ?
                    clone[word.indexOf(word[i])] = 'is-wrong' : clone[word.lastIndexOf(word[i])] = 'is-wrong'
            }
            else {
                clone[word.indexOf(word[i])] = 'is-wrong'
            }
        }
    }

    array = clone
    console.log(array)
    return array
}
function gameEnd(items: NodeListOf<Element>){
    if(Array.from(items).filter(i => i.innerHTML == '').length == 0)
        return true
    else
        return false
}