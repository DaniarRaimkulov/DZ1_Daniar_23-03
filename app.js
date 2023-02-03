var month = Number(prompt("Enter month"))
var day = Number(prompt("Enter your birthday"))
if (month === 12 && day >= 22 || month === 1 && day <= 19){
    console.log("Козерог")
}else if (month <= 1 && day >= 20 || month === 2 && day <= 18){
    console.log("Водолей")
}else if (month === 2 && day >= 19 || month === 3 && day <= 20){
    console.log("Рыбы")
}else if (month === 3 && day >= 21 || month === 4  && day <= 19){
    console.log("Овен")
}else if (month === 4 && day >= 20 || month === 5 && day <= 20){
    console.log("Телец")
}else if (month === 5 && day >= 21 || month === 6 && day <= 21){
    console.log("Близнецы")
}else if (month === 6 && day >= 22 || month === 7 && day <= 22){
    console.log("Рак")
}else if (month === 7 && day >= 23 ||  month === 8 && day <= 22){
    console.log("Лев")
}else if (month === 8 && day >= 23 ||  month === 9 && day <= 22){
    console.log("Дева")
}else if (month === 9 && day >= 23 ||  month === 10 && day <= 22){
    console.log("Весы")
}else if (month === 10 && day >= 23 ||  month === 11 && day <= 21){
    console.log("Скорпион")
}else if (month === 11 && day >= 22  || month === 12 && day <= 21){
    console.log("Стрелец")
}else {
    console.log("Вы уверены?")
}
