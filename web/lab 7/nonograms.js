document.addEventListener('DOMContentLoaded', () => {
    new nonograms()
})

class nonograms {
    constructor(){
        self = this
        this.mass = document.querySelectorAll('.box')
        this.mass.forEach( box => {
            box.addEventListener('mousedown',() => {
                this.start = true
                this.boxBlack(box)
            })
            box.addEventListener('mouseover',() => { if(this.start)this.boxBlack(box) })
            box.addEventListener('mouseout',() => { if(this.start)this.boxClear(box) })
            box.addEventListener('mouseup', () => { 
                this.start = false
                this.boxBlack(box)
            })
            box.addEventListener('dblclick',() => {
                this.boxClear(box)
                this.boxImage(box)
            })
        })
        document.querySelector('#Btn').addEventListener('click',() => {
           this.btnDialog()
        })
    }

    boxBlack(box){
        box.classList.add("filled")
    }

    boxClear(box){
        box.classList.remove("filled")
    }

    boxImage(box){
        box.classList.toggle("crossed-out")
    }

    btnDialog() {
        const dialog = document.querySelector('#dialog')
           dialog.showModal()
           dialog.querySelectorAll('button').forEach(event => {
                event.addEventListener('click', () => {
                    if(event.dataset.dialog === 'true'){
                        this.mass.forEach(box => {
                            box.classList.remove("filled")
                            box.classList.remove("crossed-out")
                        })
                        dialog.close()
                    }
                    else dialog.close()
                })
           })
    }
}