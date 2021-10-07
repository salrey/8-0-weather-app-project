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

            
        })
    }

    event.target.reset()
})

// const createWeatherInformation = (weather) => {

// }