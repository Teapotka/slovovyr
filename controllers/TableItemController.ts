export class TableItemController{
    /**
     * Time string formatting
     * @param num - number of second
     * */
    static timeString(num: number){
            const minutes = Math.trunc(num / 60)
            const seconds = num % 60
            const time = `0${minutes}:${seconds < 10 ? '0'+seconds : seconds}`
            return time
    }
    /**
     * Date string formatting
     * @param date - date to format
     * */
    static dateString(date: Date){
        const day = date.getDate()
        const month = date.getMonth()+1
        return `${day < 10 ? '0'+day : day}.${month < 10 ? '0'+month : month}`
    }
}