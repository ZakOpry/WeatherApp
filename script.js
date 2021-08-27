

const weatherDisplay = document.querySelector('.weather')
const button = document.querySelector('.button')


async function pressButton(){
const input = document.querySelector('.input').value 
const cityData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input}&units=imperial&appid=ff1cadec65d9f10c3aafc2a01b14612c`)
const cityDataJson = await cityData.json()

weatherDisplay.innerHTML = ""   
const createTemp = document.createElement('p')
const createDisc = document.createElement('P')
createTemp.innerHTML = cityDataJson.main.temp + ' °F'
createDisc.innerHTML = cityDataJson.weather[0].description
console.log(createTemp)
weatherDisplay.append(createTemp, createDisc)


}







button.addEventListener("click", pressButton)
