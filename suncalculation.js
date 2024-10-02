// var SunCalc = require('./suncalc');

function displaySunInfo() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {

    const latitude = position.coords.latitude; 
    const longitude = position.coords.longitude;

    //// calculates sun position for a given date and latitude/longitude. SunCalc.getTimes = function (date, lat, lng, height)
    const times = SunCalc.getTimes(new Date(), latitude, longitude);
    console.log("times:" +  JSON.stringify(times))
   ;

    // calculates sun position for a given date and latitude/longitude. SunCalc.getPosition = function (date, lat, lng) {
    const sunPosition = SunCalc.getPosition(new Date(), latitude, longitude);

    //calculates shadowAngle using Azimuth for direction of shadow
    const azimuth = sunPosition.azimuth;
    azimuth.textContent = azimuth.toFixed(4);

    const altitude = sunPosition.altitude;
    altitude.textContent = altitude.toFixed(4);

    const shadowAngle = (azimuth * (180 / Math.PI) + 180) % 360; //convert radians to degrees

    // calculate shadowLength based on altitude
    const shadowLength = 1 / Math.tan(altitude);

    // Display shadow angle and length
    console.log("shadowAngle:" +  JSON.stringify(shadowAngle))
    document.getElementById('shadowAngle').value = shadowAngle.toFixed(2);
    console.log(document.getElementById('shadowAngle'))

    console.log("shadowLength:" +  JSON.stringify(shadowLength))
    document.getElementById('shadowLength').value = shadowLength.toFixed(2);

    //format times
    const sunrise = times.sunrise.toLocaleTimeString();
    const sunset = times.sunset.toLocaleTimeString();

    console.log("sunrise:" +  JSON.stringify(sunrise))
    document.getElementById("sunrise").value = sunrise;

    console.log("sunset:" +  JSON.stringify(sunset))
    document.getElementById("sunset").value = sunset;
        });
};
}


displaySunInfo();
//calculate moon position
