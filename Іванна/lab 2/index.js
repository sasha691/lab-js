const imgElement=document.getElementById('cat')

let xLeft=0
let xTop=0

k=0.44
g=10

imgElement.style.left=0+'%'
imgElement.style.top=0+'%'

if(xLeft==0&&xTop==0){
    timerId()
}

function timerId(){
    if(xTop<=0){
        let animationTop=setInterval(function(){
            xTop+=k
            imgElement.style.top=xTop+'%'
            if(xTop>=90){
                clearInterval(animationTop)
                let animationBottom=setInterval(function(){
                    xTop-=k
                    imgElement.style.top=xTop+'%'
                    if(xTop<=0){
                        clearInterval(animationBottom)
                        timerId()
                    }
                },g)
            }
        },g)
    }
    if(xLeft<=0){
        
        let animationLeft=setInterval(function(){
            xLeft+=k
            imgElement.style.left=xLeft+'%'
            if(xLeft>=90){
                clearInterval(animationLeft)
                let animationRight=setInterval(function(){
                    xLeft-=k
                    imgElement.style.left=xLeft+'%'
                    if(xLeft<=0){
                        clearInterval(animationRight)
                        timerId()
                    }
                },g)
            }
        },g)
    }}
