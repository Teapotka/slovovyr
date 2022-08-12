export default function Clear(){
    const items = document.querySelectorAll('.field-item')
    const filtered = Array.from(items)
    .filter(f=> f.classList.length == 1)
    .filter(i => i.innerHTML != '')
    if(filtered.length)
        filtered[filtered.length - 1].innerHTML = ''
}