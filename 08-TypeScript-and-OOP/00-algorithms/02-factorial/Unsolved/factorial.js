// Write code to create a function that returns the factorial of `num`

let factorial = function (num) {
  let result = 1;

  for (let i = 1; i <= num; i++) {
    result *= i;
  }

  return result;
};
