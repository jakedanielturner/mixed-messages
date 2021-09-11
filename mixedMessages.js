// Mixed Messages first project file

const weatherTypes = ['Sunny', 'Rain', 'Hail', 'Thunderstorms', 'Snow']

var temperature = Math.floor(Math.random() * 40);

var humidity = Math.floor(Math.random() * 100);

function output () {
    var selectedWeatherType = weatherTypes[(Math.floor(Math.random() * weatherTypes.length))];

    weatherOutput = `The weather is ${selectedWeatherType}, with a temperature of ${temperature}C and a humidity of ${humidity}%.`

    return weatherOutput;
}

console.log(output());