document.querySelector('#bth').addEventListener('click', () => {
    document.querySelector('#result3').innerHTML = ""
    document.querySelector('#conteiner1').querySelectorAll('input[type="checkbox"]').forEach((element) => {
        if(element.checked){
            document.querySelector('#result3').innerHTML += ` ${element.dataset.type}`
        }
    })
})



const divText = document.querySelector('.resultDiv')

document.querySelectorAll('#conteiner2 input[type="checkbox"]').forEach((checkbox) => {
    checkbox.addEventListener('change', () => {
        if(checkbox.checked){
            divText.innerHTML += ' ' + document.querySelector(`label[for="${checkbox.name}"]`).textContent
        }
        if(!checkbox.checked){
            text = document.querySelector(`label[for="${checkbox.name}"]`).textContent
            regeexp = new RegExp(`\\b${text}\\b`,'g')
            console.log(regeexp)
            divText.innerHTML = divText.innerHTML.replace(regeexp, "")
        }
    })
})