document.querySelector('#bth').addEventListener('click', () => {
    document.querySelector('#result3').innerHTML = ""
    document.querySelector('#conteiner1').querySelectorAll('input[type="checkbox"]').forEach((element) => {
        if(element.checked){
            document.querySelector('#result3').innerHTML += ` ${element.dataset.type}`
        }
    })
})


// це не працює
document.querySelectorAll('#conteiner2 input[type="checkbox"]').forEach(function(){
    this.addEventListener('change', (element) => {
        if(element.checked)
            document.querySelector('#conteiner2 div').innerHTML = document.querySelector('#conteiner2')
    })
})