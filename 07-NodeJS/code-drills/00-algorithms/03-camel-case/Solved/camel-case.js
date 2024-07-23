// Write code to create a function that accepts a string and returns the string in camelCase

const camelCase = function (str) {
  let result = "";
  const words = str.toLowerCase().split(" ");

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    const letters = word.split("");

    if (i > 0) {
      letters[0] = letters[0].toUpperCase();
    }

    result += letters.join("");
  }

  return result;
};
