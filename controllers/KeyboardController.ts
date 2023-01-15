import {readDataFromLS, SLOVOVYR_REGION_KEY} from "../data/LocalStorage";
import {getWord} from "../data/words";
import {Dispatch} from "redux";
import {switchModal} from "../redux/modalSlice";
import axios from "axios";
import React from "react";

export class KeyboardController {
    /**
     * onKeyUp event handler
     * @param e - KeyboardEvent
     * */
    static onKeyUp(e: KeyboardEvent){
        if(e.key.length > 1){
            if(e.key == 'Enter' || e.key == 'Backspace')
                document.getElementById(e.key.toLowerCase()+'Module')!.parentElement!.click()
        }
        else{
            document.getElementById(e.key)?.click()
        }
    }
    /**
     * onClick event handler
     * @param e - MouseEvent
     * */
    static async onClick(e:React.MouseEvent<HTMLDivElement>){
        const selector = e.currentTarget
        if(selector.children.length) {
            switch (selector.children[0].id) {
                case 'enterModule':
                    await this.enter()
                    break
                case 'backspaceModule':
                    this.clear()
                    break
            }
        }
        else{
            this.input(selector.textContent!)
        }
    }
    /**
     * Redux dispatch
     * */
    private static dispatch: Dispatch | undefined
    /**
     * Clears the last taken cell of the field
    * */
    static clear(){
        const taken = this.nodes.filter(f => f.innerHTML != '' && f.classList.length == 1)
        if(taken.length)
            taken[taken.length-1].innerHTML = ''
    }
    /**
     * Checking words and game status, field and keys coloring
    * */
    static async enter(){
        const taken = this.nodes.filter(f => f.innerHTML != '' && f.classList.length == 1)
        if(taken.length == 5){
            this.fetchingToggle(taken)
            const word = taken.reduce((word, letter ) => word + letter.innerHTML, '')
            const answer = this.answer

            if(word == answer){
                this.fetchingToggle(taken)
                const colors = ['is-right','is-right','is-right','is-right','is-right']
                this.colorField(taken, colors)
                this.colorKeys(word, colors)
                this.dispatch && this.dispatch(switchModal('win'))
            }
            else{
                const result = await this.checkExisting(word)
                this.fetchingToggle(taken)
                if(result){
                    const colors = this.matchLetters(word.split(''), answer.split(''))
                    this.colorField(taken, colors)
                    this.colorKeys(word, colors)
                    this.gameOver()
                }
                else {
                    taken.forEach(value=>{
                        value.innerHTML = ''
                    })
                }
            }
        }
    }
    /**
     * Enters a character in a free cell of the field
     * @param key character to input
    * */
    static input(key: string){
        const free = this.nodes.filter(f => f.innerHTML == '')
        const taken = this.nodes.filter(f => f.innerHTML != '' && f.classList.length == 1)
        const fetching = this.nodes.filter(f => f.innerHTML != '' && f.classList.contains('is-fetching'))

        if(taken.length <= 4 && free.length && !fetching.length)
            free[0].innerHTML = key
    }
    /**
     * Add redux dispatch
     * @param dispatch - redux dispatch
     * */
    static addDispatch(dispatch: Dispatch){
        this.dispatch = dispatch
    }

    /**
     * Get an array of all cells of the field
     * @return array of nodes
    * */
    private static get nodes(){
        return Array.from(document.querySelectorAll('.field-item'))
    }
    /**
     * Get the player's current region
     * @return current region string
     * */
    private static get region(){
        return readDataFromLS(SLOVOVYR_REGION_KEY)
    }
    /**
     * Get the answer
     * @return answer string
     * */
    private static get answer(){
        return getWord(this.region).word
    }
    /**
     * Add or remove .is-fetching class
     * */
    private static fetchingToggle(taken: Element[]){
        taken.forEach(value=>{
            value.classList.toggle('is-fetching')
        })
    }
    /**
     * Color the keyboard
     * @param keys - keys of the keyboard
     * @param colors - array of colors
     * */
    private static colorKeys(keys: string, colors: string[]){
        for (let i = 0; i < 5; i++) {
            const selector = document.getElementById(keys[i])!.classList
            if (selector.length > 1)
                selector.replace(selector[1], colors[i])
            else
                selector.add(colors[i])
        }
    }
    /**
     * Color the field
     * @param taken - array of taken cells of the field
     * @param colors - array of colors
     * */
    private static colorField(taken: Element[], colors: string[]){
        for (let i = 0; i < 5; i++) {
            taken[i].classList.add(colors[i])
        }
    }
    /**
     * Check the existence of a word
     * @param word - word to check
     * @return true or false
     * */
    private static async checkExisting(word: string){
        try{
            await axios.get(`${process.env.BASE_URL}/api/v1/${word}`)
            return true
        }
        catch (e) {
            return false
        }
    }
    /**
     * Word matching algorithm
     * @param word - the user's word as an array of letters
     * @param answer - the answer as an array of letters
     * @return array of colors
     * */
    static matchLetters(word: string[], answer: string[]){
        let array = ['', '', '', '', '']
        for(let i = 0; i < 5; i++){
            Array.from(answer).includes(word[i]) ? array[i] = 'is-semiright' : null
        }

        for (let i = 0; i < 5; i++) {
            !Array.from(answer).includes(word[i]) ? array[i] = 'is-wrong' : null
        }

        const LettersRepetitionsInWord:any = {};
        const LettersRepetitionsInAnswer:any = {};

        word.forEach(function (x) { LettersRepetitionsInWord[x] =
            (LettersRepetitionsInWord[x] || 0) + 1; });
        answer.forEach(function (x) { LettersRepetitionsInAnswer[x] =
            (LettersRepetitionsInAnswer[x] || 0) + 1; });

        const historyArray:any[] = []

        for(let i = 0; i < 5; i++){
            if(array[i] == 'is-semiright'){
                if(!historyArray.includes(word[i])){
                    historyArray.push(word[i])
                    const numberOfRepetitions = LettersRepetitionsInAnswer[word[i]]
                    const LettersPositionIndices = word.reduce((a:any, e, j) => {
                        if (e === word[i])
                            a.push(j);
                        return a;
                    }, [])
                    for(let j = 0; j < LettersPositionIndices.length; j++){
                        j < numberOfRepetitions ?
                            array[LettersPositionIndices[j]] = 'is-semiright'
                            :
                            array[LettersPositionIndices[j]] = 'is-wrong'
                    }
                }
            }
        }
        for (let i = 0; i < 5; i++) {
            word[i] == answer[i] ? array[i] = 'is-right' : null
        }
        return array
    }
    /**
     * Check if the user can continue the game
     * */
    private static gameOver(){
        const freeCount = Array.from(document.querySelectorAll('.field-item'))
            .filter(f=>f.innerHTML == '').length
        if(freeCount == 0){
            this.dispatch && this.dispatch(switchModal('lose'))
        }
    }
}