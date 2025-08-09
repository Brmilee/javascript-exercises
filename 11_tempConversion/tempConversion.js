const convertToCelsius = function(celsius, fahrenheit) {
  celsius = Math.round((fahrenheit - 32) * (5 / 9) * 10) / 10;
};

const convertToFahrenheit = function(fahrenheit, celsius) {
  fahrenheit = Math.round((celsius * (5 / 9) + 32) * 10) / 10; 
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
