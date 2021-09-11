// Mixed Messages second project file
// This file is intended to look more like the project file provided by Codecademy, including objects and interations

const data = {
    'weatherTypes': ['Sunny', 'Rainy', 'Thunderstormy', 'Windy', 'Snowy'],
    'daysOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    'cities': ['London', 'Birmingham', 'Leeds', 'Sheffield', 'Manchester', 'Newcastle', 'Belfast', 'Cardiff', 'Edinburgh', 'Glasgow']
}

const randomNumberGenerator = (num) => {
    generated = Math.floor(Math.random() * num);
    return generated;
}

const dataSelection = (obj) => {
    const output = [];

    for (var key in obj) {
        output.push(obj[key][randomNumberGenerator(obj[key].length)]);
    }

    return output;
}

console.log(dataSelection(data));