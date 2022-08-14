import anime from 'animejs'
export default function timerAnimation() {
    const animation = anime({
        duration: 3 * 60 * 1000,
        easing: "linear",
        targets: '#timer',
        strokeDashoffset: [0, anime.setDashoffset],
        stroke: ['#404040', '#FF0000']
    })
        // .finished
        // .then(() => {
        //     //callback fn
        //     console.log('finish')
        // });
        document.querySelectorAll<HTMLDivElement>('.setting-icon').forEach(val => {
            val.addEventListener('click', () => {
                if (window.location.pathname == '/game') {
                    console.log('pause')
                    animation.pause()
                }
            })
        })
        animation.finished.then(()=>{
            console.log('finish')
        })
        // setTimeout(()=>{
        //     animation.pause()
        // },3000)
    // document.querySelector()
    //word of the day api
    // fetch('http://localhost:3000/api/dayword', {
    //     method: 'POST',
    //     body: JSON.stringify({word: 'f'})
    // })
    // .then(d=>d.json())
    // .then(d=>console.log(d))

    //Pause and play
    // setTimeout(()=>{
    //     animation.pause()
    // },3000)
    // setTimeout(()=>{
    //     animation.play()
    // },6000)
}