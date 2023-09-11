let day = document.getElementById("day")
let time = document.getElementById("time")

let daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday", 
    "Wednesday", 
    "Thursday", 
    "Friday", 
    "Saturday"
]

let currentDay = new Date().getDay()
day.innerHTML = `Today is <span>${daysOfWeek[currentDay]}</span>` 

setInterval(() => {
    let currentTime = new Date().getTime()
    time.innerHTML = currentTime},1000)

