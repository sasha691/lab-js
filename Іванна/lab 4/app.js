const colorRed=document.getElementById('red')
const colorYellow=document.getElementById('yellow')
const colorGreen=document.getElementById('green')

class animation{

    constructor(timer){
        this.timer = timer
    }

    set timer(value){
        let _timer = value / 3
        this.red = _timer
        this.yellow = _timer * 2
        this.green = value
    }
    
    greenAnimation(){
        
        let timerGreen = setTimeout(() => {colorGreen.style.backgroundColor = 'green'}, this.green)
        setTimeout(() => {this.whiteAnimation('green')}, this.green + 1)
    }

    redAnimation(){
        
        let timerRed = setTimeout(() => {colorRed.style.backgroundColor = 'red'}, this.red)
        setTimeout(() => {this.whiteAnimation('red')}, this.red + 1)
    }

    yellowAnimation(){
        
        let timerYellow = setTimeout(() => {colorYellow.style.backgroundColor = 'yellow'}, this.yellow)
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

let animationColor = new animation(3000)

animationColor.redAnimation()
animationColor.yellowAnimation()
animationColor.greenAnimation()