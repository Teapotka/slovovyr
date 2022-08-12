export default function Input(char: string){
    const validate = Array.from(document.querySelectorAll('.field-item'))
    .filter(i=>i.classList.length == 1)
    .filter(f=>f.innerHTML != '')
    if(validate.length < 5){
        const items = document.querySelectorAll('.field-item')
        for (let i = 0; i < items.length; i++) {
            if(items[i].innerHTML == ''){
                items[i].innerHTML = char
                break
            }
        }
    }
}