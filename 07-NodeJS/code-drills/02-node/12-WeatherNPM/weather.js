let// Here we include the weather-js so we can use it in our Node application.
const weather = require("weather-js");

// Then we use the package to search for the weather at a location
weather.find(
  { search: "San Francisco, CA", degreeType: "F" },
  function (err, result) {
    // If there is an error log it.
    if (err) {
      console.log(err);
    }

    // If there is no error... then print out the weather data.
    // We use JSON.stringify to print the data in string format.
    // We use the JSON.stringify argument of "2" to make the format pretty.
    // See link here: http://stackoverflow.com/questions/4810841/how-can-i-pretty-print-json-using-javascript
    console.log(JSON.stringify(result, null, 2));
  }
);

// const weather {
// 	name: "weather",
// 	find: function(){
// 		//does some work
// 	}
// }
