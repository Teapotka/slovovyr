export class ModalContainerController{
    /**
     * Type of modal
     * */
    static type: TModals = 'none'
    /**
     * toggles Animation of appearance and disappearance and sets type of modal
     * @param type - type of modal
     * */
    static animate(type: TModals){
        if (this.type == 'none' && type != 'none'){
            this.show()
            this.type = type
        }
        if((this.type == 'win' || this.type == 'lose') && type == 'none'){
            this.modalClassList.replace('is-appearedModal', 'is-hiddenModal')
            this.type = type
            return
        }
        if(this.type != 'none' && type == 'none'){
            this.hide(type)
        }
    }
    /**
     * Appearance animation
     * */
    static async show(){
        setTimeout(()=>{
            this.modalClassList.replace('is-hiddenModal', 'is-appearedModal')
        })
    }
    /**
     * Disappearance animation
     * @param type - type of modal
     * */
    static async hide(type: TModals){
        setTimeout(()=>{
            this.modalClassList.replace('is-appearedModal', 'is-disappearedModal')
            this.type = type
            setTimeout(()=>{
               this.modalClassList.replace('is-disappearedModal', 'is-hiddenModal')
            },800)
        })
    }
    /**
     * Get list of modal classes
     * @return classList of modal
     * */
    private static get modalClassList(){
        return document.querySelector('.l-modal')!.classList
    }
}