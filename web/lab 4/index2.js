function findDates(text){
    regexp = /\d{4}-\d{2}-\d{2}/g
    console.log(text.match(regexp))
}

const inputElementCamelCase = document.querySelector('input[placeholder="toCamelCase"]')

inputElementCamelCase.addEventListener('input',() => {
    document.querySelector('#result1').innerHTML = inputElementCamelCase.value.replace(/_([a-z])/g, (_, up) => {
        return up.toUpperCase()
    })
})

const inputElmentSnakeCase = document.querySelector('input[placeholder="toSnakeCase"]')

inputElmentSnakeCase.addEventListener('input',() => {
    document.querySelector('#result2').innerHTML = inputElmentSnakeCase.value.replace(/([A-Z])/g, (down) => {
        return '_' + down.toLowerCase()
    } )
})

function findHexColor(text){
    return text.match(/#([A-F0-9]{6}|[A-F0-9]{3})/ig)
}

 