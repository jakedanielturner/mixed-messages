// Mixed Messages second project file
// This file is intended to look more like the project file provided by Codecademy, including objects and interations

const data = {
    'weatherTypes': ['Sunny', 'Rainy', 'Thunderstormy', 'Windy', 'Snowy'],
    'daysOfWeek': [],
    'cities': []
}

const randomNumberGenerator = (num) => {
    generated = Math.floor(Math.random() * num);
    return generated;
}

const dataSelection = (obj) => {
    const selectedWeatherType = obj.weatherTypes[randomNumberGenerator(obj.weatherTypes.length)];
    return selectedWeatherType;
}

console.log(dataSelection(data));