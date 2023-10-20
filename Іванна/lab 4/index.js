const colorRed=document.getElementById('red')
const colorYellow=document.getElementById('yellow')
const colorGreen=document.getElementById('green')

function redAnimation(){
    let timerId = setInterval(()=>{colorRed.style.cssText+=`background-color:red;`}, 1)
    setTimeout(() => { clearInterval(timerId); colorRed.style.cssText+=`background-color:aliceblue;`}, 5000)
}

function yellowAnimation(){
    let timerId = setInterval(()=>{colorYellow.style.cssText+=`background-color:yellow;`}, 2000)
    setTimeout(() => { clearInterval(timerId); colorYellow.style.cssText+=`background-color:aliceblue;`}, 5000)
}

function greenAnimation(){
    let timerId = setInterval(()=>{colorGreen.style.cssText+=`background-color:green;`}, 2000)
    setTimeout(() => { clearInterval(timerId); colorGreen.style.cssText+=`background-color:aliceblue;`}, 3000)
}

function greenAnimationClicer(){
    let clik=setInterval(()=>{
        let timerId = setInterval(()=>{colorGreen.style.cssText+=`background-color:green;`}, 0)
        setTimeout(() => { clearInterval(timerId); colorGreen.style.cssText+=`background-color:aliceblue;`}, 100)
    },100)
    setTimeout(()=>{clearInterval(clik)},2000)
}

function start(){
    setInterval(()=>{
        setTimeout(redAnimation,1)
        setTimeout(yellowAnimation,2000)
        setTimeout(greenAnimation,5000)
        setTimeout(greenAnimation,7000)
    },11000)
}
start()