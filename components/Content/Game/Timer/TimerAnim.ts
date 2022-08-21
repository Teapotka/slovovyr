import anime from "animejs";

export function TimerAnimation(){
    return anime.timeline({
        duration: 5 * 60 * 1000,
        easing: "linear",
    })
}