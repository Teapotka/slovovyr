import axios from "axios"

export default function Enter(){
    const items = document.querySelectorAll('.field-item')
    const filtered = Array.from(items).filter(i=>i.classList.length == 1).filter(f => f.innerHTML != '')
    if(filtered.length == 5){

        let word = ''
        filtered.forEach((val)=>{
            word += val.innerHTML
        })
        console.log(word)
        filtered.forEach((value)=>{
            value.classList.add('is-fetching')
        })
        axios.get(`${process.env.API_KEY}`+word)
        .then(d=>{
            filtered.forEach((value)=>{
                value.classList.remove('is-fetching')
            })
            if(d.data.existing){
                let answer = ''
                axios.post(`${process.env.SECRET_API_KEY}`,{region: 'center'})
                .then((d)=>{
                    answer = d.data.word
                    console.log(answer)
                    matchWord(word, answer).forEach((val, i)=>{
                        filtered[i].classList.add(val)
                        const selector = document.getElementById(word[i])!.classList
                        if(selector.length > 1)
                            selector.replace(selector[1],val)
                        else
                        selector.add(val)

                    })
                })
                
            }
            else{
                for (let i = 0; i < 5; i++) {
                    filtered[i].innerHTML = ''      
                }
            }
        })
    }
}
function matchWord(word:string, answer:string){
    let match:string[] = []
    for (let i = 0; i < 5; i++) {
        if(word[i] == answer[i]){
            match[i] = 'is-right'
        }
        else{
            match[i] = word[i]
        }
    }
    let other = match.filter(i=> i != 'is-right')
    console.log(other)
    
    other.forEach((val, i)=>{
        if(answer.includes(val)){
            match[word.indexOf(val)] = 'is-semiright'
        }
        else{
            if(match[word.indexOf(val)] != 'is-wrong')
            match[word.indexOf(val)] = 'is-wrong'
            else
            match = match.map(i=> i == val ? 'is-wrong' : i)
            console.log(match)
            // match[word] = 'is-wrong'
        }
    })
    
    console.log(match)
    
    return match
}