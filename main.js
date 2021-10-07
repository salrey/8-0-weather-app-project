//--------Search Form-------
//Query form and add an event, then fetch api
document.querySelector("form").addEventListener("submit", (event) => {
    event.preventDefault();

    const location = event.target.location.value;
    
    //find errors
    if (!location) {
        //Set the main section to add a class of error that will change the background to red and font white 
        document.querySelector(".display").classList.add("error")
    } else {
        //reset/remove old things
        document.querySelector(".display p").classList.add("hidden")
        
        fetch(`http://wttr.in/${location}?format=j1`)
        .then((response) => response.json())
        .then((weather) => {            
            //check weather
            console.log(weather.nearest_area[0].areaName[0].value)

            //create 4 articles in the main section (main-info, today, tomorrow, day-after-tomorrow)

            const mainInfo = document.createElement("article")
            mainInfo.id = "main-info"
            const today = document.createElement("article")
            today.id = "today"
            const tomorrow = document.createElement("article")
            tomorrow.id = "tomorrow"
            const dayAfterTomorrow = document.createElement("article")
            dayAfterTomorrow.id = "day-after-tomorrow"

            //append all of the articles to .display section 
            document.querySelector(".display").append(mainInfo, today, tomorrow, dayAfterTomorrow)

            //Add stuff to main-info
            const mainHeading = document.createElement("h2");
            mainHeading.textContent = capitalize(location);
            const area = document.createElement("p");
            area.innerHTML = `<span>Area:</span> ${capitalize(weather.nearest_area[0].areaName[0].value)}`
            const region = document.createElement("p");
            region.innerHTML = `<span>Region:</span> ${capitalize(weather.nearest_area[0].region[0].value)}`
            const country = document.createElement("p");
            country.innerHTML = `<span>Country:</span> ${capitalize(weather.nearest_area[0].country[0].value)}`
            const currently = document.createElement("p");
            currently.innerHTML = `<span>Currently:</span> Feels like ${capitalize(weather.current_condition[0].FeelsLikeF)}°F`
            //append it main-info 
            mainInfo.append(mainHeading, area, region, country, currently);

            //Add stuff to today
            const todayHeading = document.createElement("h3")
            todayHeading.textContent = "Today"
            const todayAvg = document.createElement("p")
            todayAvg.innerHTML = `<span>Average:</span> ${capitalize(weather.weather[0].avgtempF)}°F`
            const todayMax = document.createElement("p")
            todayMax.innerHTML = `<span>Highest:</span> ${capitalize(weather.weather[0].maxtempF)}°F`
            const todayMin = document.createElement("p")
            todayMin.innerHTML = `<span>Lowest:</span> ${capitalize(weather.weather[0].mintempF)}°F`
            today.append(todayHeading,todayAvg,todayMax, todayMin)
            
            //Add stuff to tomorrow
            const tomorrowHeading = document.createElement("h3")
            tomorrowHeading.textContent = "Tomorrow"
            const tomorrowAvg = document.createElement("p")
            tomorrowAvg.innerHTML = `<span>Average:</span> ${capitalize(weather.weather[1].avgtempF)}°F`
            const tomorrowMax = document.createElement("p")
            tomorrowMax.innerHTML = `<span>Highest:</span> ${capitalize(weather.weather[1].maxtempF)}°F`
            const tomorrowMin = document.createElement("p")
            tomorrowMin.innerHTML = `<span>Lowest:</span> ${capitalize(weather.weather[1].mintempF)}°F`
            tomorrow.append(tomorrowHeading,tomorrowAvg,tomorrowMax, tomorrowMin)

            //Add stuff to day-after-tomorrow 
            const dayAfterHeading = document.createElement("h3")
            dayAfterHeading.textContent = "Day After Tomorrow"
            const dayAfterAvg = document.createElement("p")
            dayAfterAvg.innerHTML = `<span>Average:</span> ${capitalize(weather.weather[2].avgtempF)}°F`
            const dayAfterMax = document.createElement("p")
            dayAfterMax.innerHTML = `<span>Highest:</span> ${capitalize(weather.weather[2].maxtempF)}°F`
            const dayAfterMin = document.createElement("p")
            dayAfterMin.innerHTML = `<span>Lowest:</span> ${capitalize(weather.weather[2].mintempF)}°F`
            dayAfterTomorrow.append(dayAfterHeading,dayAfterAvg,dayAfterMax, dayAfterMin)


        })
    }

    event.target.reset()
})

//------------Helper Functions------------
const capitalize = (location) => {
    const listWords = location.split(" ")
    const capLocation = listWords.map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
    return capLocation.join(" ")
}

// const createWeatherInformation = (weather) => {

// }