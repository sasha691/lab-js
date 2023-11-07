document.addEventListener('DOMContentLoaded',() => {
    setInterval(() => {
        let nowDate = new Date
        document.querySelector("#function1").innerHTML = 'Date: ' + `${nowDate.getDate()}` + ':' + `${month(nowDate.getMonth())}` +
            ':' + `${nowDate.getFullYear()}` + '<br>' + 'Time: ' + `${nowDate.getHours()}` +':' + `${nowDate.getMinutes()}` + ':' + `${nowDate.getSeconds()}` +
            '<br>' + 'Day: ' + `${day(nowDate.getDay())}`
    }, 1000)

})

function day(index){
    array = [
        'Неділя',
        'Понеділок',
        'Вівторок',
        'Середа',
        'Четвер',
        'Пятниця',
        'Субота'
    ]
    return array[index]
}

function month(index){
    mass = []
    for(i=1;i<=12;i++){
        mass.push(i)
    }
    return mass[index]
}

document.querySelector('input[type="date"]').addEventListener('change', task2)

function task2(){
    let nowDay = new Date
    const nowTime = new Date
    inputValue = document.querySelector('input[type="date"]').value
    console.log(inputValue)
    nowDay.setFullYear(nowDay.getFullYear() - 1)
    year = nowDay.getFullYear()
    lastDay = []
    for(index=1;index<=7;index++){
        nowDay.setDate(nowDay.getDate() - 1)
        if(nowDay.getDate() - 10 < 0){
            lastDay.push('0' + nowDay.getDate())
        }else lastDay.push(nowDay.getDate() + '')
    }
    switch(inputValue){
        case `${nowTime.getFullYear()}-${month(nowTime.getMonth())}-${yearCase(nowTime.getDate())}`:
            text = 'Сьогодні'
            break;
        case `${nowTime.getFullYear()}-${month(nowTime.getMonth())}-${lastDay[0]}`:
            text = 'Вчора'
            break;
        case `${nowTime.getFullYear()}-${month(nowTime.getMonth())}-${lastDay[1]}`:
        case `${nowTime.getFullYear()}-${month(nowTime.getMonth())}-${lastDay[2]}`:
        case `${nowTime.getFullYear()}-${month(nowTime.getMonth())}-${lastDay[3]}`:
        case `${nowTime.getFullYear()}-${month(nowTime.getMonth())}-${lastDay[4]}`:
        case `${nowTime.getFullYear()}-${month(nowTime.getMonth())}-${lastDay[5]}`:
            text = `${yearCase(nowTime.getDate()) - (inputValue[8] + inputValue[9])} дні тому`
            break;
        case `${nowTime.getFullYear()}-${month(nowTime.getMonth())}-${lastDay[6]}`:
            text = 'Тиждень тому'
            break;
        case `${year}-${month(nowTime.getMonth())}-${yearCase(nowTime.getDate())}`:
            text = 'рік тому'
            break;
        
        default:
            text = inputValue
            break;
    }
    test= `${year}-${month(nowTime.getMonth())}-${yearCase()}`
    document.querySelector("#function2").innerHTML = text
}

function yearCase(index){
    return index-10<0? '0'+index: index
}