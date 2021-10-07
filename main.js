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
            // console.log(weather)

            //create main heading
            const mainHeading = document.createElement("h2");
            mainHeading.textContent = capitalize(location);

            //create main info
            const area = document.createElement("p");
            

            //append main weather information
            document.querySelector(".display").append(mainHeading, area, region, country, currently);
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