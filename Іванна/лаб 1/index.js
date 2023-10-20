const inputElement=document.getElementById('input')
const btnElement=document.getElementById('btn')
const textElement=document.getElementById('text')
const textElement2=document.getElementById('ali')
const combobox=document.getElementById('combobox')

console.log(combobox[0])

btnElement.onclick=function(){
    let i=0
    textElement.textContent=''
    for(;i<(inputElement.value.length/2);i++){
        textElement.textContent+=inputElement.value[i].toUpperCase()
    }
    for(;i<inputElement.value.length;i++){
        textElement.textContent+=inputElement.value[i]
    }
}

combobox.addEventListener('change',function(){
    textElement2.textContent=''
    textElement2.textContent=combobox.value
})