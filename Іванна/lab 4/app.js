const colorRed=document.getElementById('red')
const colorYellow=document.getElementById('yellow')
const colorGreen=document.getElementById('green')

class Animation{

    constructor(timer){
        this.timer = timer
    }

    set timer(value){
        let _timer = value / 3
        this.red = 0
        this.yellow = _timer 
        this.green = (_timer * 2) 
        this.greenClicer = (_timer * 2) + (_timer / 2)
        this.finish = _timer / 2
    }
    
    greenAnimation(){
        
        let timerGreen = setTimeout(() => {colorGreen.style.backgroundColor = 'green'}, this.green)
        setTimeout(() => {this.whiteAnimation('green')}, this.green)
        setTimeout(() => {
            let clicerWhite = setInterval(() => {colorGreen.style.backgroundColor = 'white'}, 400)
            let clicerGreen = setInterval(() => {colorGreen.style.backgroundColor = 'green'}, 800)
            setTimeout(() => {clearInterval(clicerWhite)}, this.finish)
            setTimeout(() => {clearInterval(clicerGreen)}, this.finish)
        }, this.greenClicer)
    }

    redAnimation(){
        
        let timerRed = setTimeout(() => {colorRed.style.backgroundColor = 'red'}, this.red)
        setTimeout(() => {this.whiteAnimation('red')}, this.red)
    }

    yellowAnimation(){
        
        let timerYellow = setTimeout(() => {colorYellow.style.backgroundColor = 'yellow'}, this.yellow / 1.4)
        setTimeout(() => {this.whiteAnimation('yellow')}, this.yellow)
    }

    whiteAnimation(index){
        switch (index) {
            case 'red':
                colorGreen.style.backgroundColor = 'white'
                colorYellow.style.backgroundColor = 'white'
                break;
            case 'yellow':
                colorGreen.style.backgroundColor = 'white'
                colorRed.style.backgroundColor = 'white'
                break;
            case 'green':
                colorRed.style.backgroundColor = 'white'
                colorYellow.style.backgroundColor = 'white'
                break;
        }
    }
}

const speed = 27000

setInterval(() => {
    let animationColor = new Animation(speed)

    animationColor.redAnimation()
    animationColor.yellowAnimation()
    animationColor.greenAnimation()
}, speed + 10)