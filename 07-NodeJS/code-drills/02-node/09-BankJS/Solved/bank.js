// Load the fs package to read and write
const fs = require("fs");

// Take two arguments.
// The first will be the action (i.e. "deposit", "withdraw", etc.)
// The second will be the amount that will be added, withdrawn, etc.
const action = process.argv[2];
const value = process.argv[3];

// We will then create a switch-case statement (if-else would also work).
// The switch-case will direct which function gets run.
switch (action) {
  case "total":
    total();
    break;

  case "deposit":
    deposit(value);
    break;

  case "withdraw":
    withdraw(value);
    break;

  case "lotto":
    lotto();
    break;
}

// If the "total" function is called...
function total() {
  // We will read the existing bank file
  fs.readFile("bank.txt", "utf8", function (err, data) {
    if (err) {
      return console.log(err);
    }

    // Break down all the numbers inside
    data = data.split(", ");
    let result = 0;

    // Loop through those numbers and add them together to get a sum.
    for (let i = 0; i < data.length; i++) {
      if (parseFloat(data[i])) {
        result += parseFloat(data[i]);
      }
    }

    // We will then print the final balance rounded to two decimal places.
    console.log("You have a total of " + result.toFixed(2));
  });
}

// If the "Deposit" function is called...
function deposit(val) {
  // We will add the value to the bank file.
  fs.appendFile("bank.txt", ", " + val, function (err) {
    if (err) {
      return console.log(err);
    }
  });

  // We will then print the value that was added (but we wont print the total).
  console.log("Deposited " + value + ".");
}

// If the "Withdraw" function is called
function withdraw(val) {
  // We will add a negative value to the bank file.
  fs.appendFile("bank.txt", ", -" + val, function (err) {
    if (err) {
      return console.log(err);
    }
  });

  // We will then print the value that was subtracted (but we wont print the total).
  console.log("Withdrew " + value + ".");
}

// If the "Lotto" function is called
function lotto() {
  withdraw(0.25);

  // We will subtract 25 cents
  // fs.appendFile("bank.txt", ", -.25", function(err) {
  //   if (err) {
  //     return console.log(err);
  //   }
  // });

  // Then grab a random number
  const chance = Math.floor(Math.random() * 10 + 1);

  // If the random number equals 1...
  if (chance === 1) {
    // We will then add $100 to the account.
    deposit(100);
    // fs.appendFile("bank.txt", ", 100", function(err) {
    //   if (err) {
    //     return console.log(err);
    //   }
    // });

    // And tell the user the amount was added.
    console.log("Congrats you won the lottery!");

    // Otherwise we will tell them they lost 25 cents.
  } else {
    console.log(
      "Sorry. You just lost 25 cents. Maybe you should get a job instead."
    );
  }
}
