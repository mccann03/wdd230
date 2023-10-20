/* DOM to retrieve temperature and wind speed from HTML */
document.querySelector('#temperature').value = Temperature;
document.querySelector('#windSpeed').value = windSpeed;

/* Windchill formula */
let windChill = 35.74 + (0.62150 * Temperature) - ((35.75 * windSpeed) ** 0.16) + ((0.4275 * Temperature * windSpeed) ** 0.16);

/* DOM function to insert Windchill formula result*/
function windChillCal() {
    document.querySelector('#windChill').innerHTML = windChill;

    /* if statement for temperature */
    if (Temperature <= 50 && windSpeed > 3.0) {
    console.log(windChill);
    }
    else {
        console.log("N/A");
    }
}
/*event listener for when screen is clicked.*/
document.addEventListener('click', windChillCal);


