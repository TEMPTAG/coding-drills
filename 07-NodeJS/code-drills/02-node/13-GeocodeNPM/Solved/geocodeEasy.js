// Instructions:
// Build a Node application that takes in a location input via the command line, then geocodes it using the geocoder NPM package.
// Then console.log the geocoding information for display.

// Easier: User will provide the city and state in the following format: "Atlanta, GA", "Houston, TX"
// Slightly More Challenging: User will provide the address in any format: "151 Sip Ave Jersey City, NJ", "Austin, TX", etc.

// All: Be sure to console log the output using JSON.stringify in "pretty-print" format.

// ========================================================================================================================

// Include the node-geocoder NPM package (Remember to run "npm install node-geocoder"!)
const NodeGeocoder = require("node-geocoder");

// Replace with your mapquest consumer API key
const options = {
  provider: "mapquest",
  apiKey: "5hHNxmQcnPeJmRUWqxbqnX6ZadVQIi6W",
};

const geocoder = NodeGeocoder(options);

// Take in the command line arguments
const city = process.argv[2];
const state = process.argv[3];

// Build the address by combining the city and state
const address = city + " " + state;

// Then use the geocoder object to search the address
geocoder.geocode(address, function (err, data) {
  // Then console log the result and stringify it.
  // Note the argument of "2" being included in the JSON stringify. This makes the JSON output pretty.
  // See link here: http://stackoverflow.com/questions/4810841/how-can-i-pretty-print-json-using-javascript
  console.log(JSON.stringify(data, null, 2));
});

// const geocoder {
// 	name: "geocoder",
// 	geocode: function(){
// 		//does some work
// 	}
// }
