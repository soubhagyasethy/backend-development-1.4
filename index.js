const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3000;

function getWelcomeMessage() {
  return 'Welcome to our service!';
}

app.get('/welcome', (req, res) => {
  res.send(getWelcomeMessage());
});

function getGreetingMessage(username) {
  return 'Hello, ' + username + '!';
}

app.get('/greet', (req, res) => {
  let username = req.query.username;
  res.send(getGreetingMessage(username));
});

function checkPassword(password) {
  console.log(password.length);
  if (password.length > 15) {
    return 'Password is strong.';
  } else {
    return 'Passowrd is weak.';
  }
}

app.get('/check-password', (req, res) => {
  let password = req.query.password;
  res.send(checkPassword(password));
});

function calculateSum(num1, num2) {
  let sum = num1 + num2;
  return sum.toString();
}

app.get('/sum', (req, res) => {
  let num1 = parseFloat(req.query.num1);
  let num2 = parseFloat(req.query.num2);
  res.send(calculateSum(num1, num2));
});

function checkSubscriptionStatus(username, subscribed) {
  if (subscribed === 'true') {
    return username + ' is subscribed.';
  } else {
    return username + ' is not subscribed';
  }
}

app.get('/subscription-status', (req, res) => {
  let username = req.query.username;
  let subscribed = req.query.isSubscribed;
  res.send(checkSubscriptionStatus(username, subscribed));
});

function calculateDiscountedPrice(price, discount) {
  let finalPrice = price - (price * discount) / 100;
  return finalPrice.toString();
}

app.get('/discounted-price', (req, res) => {
  let price = parseFloat(req.query.price);
  let discount = parseFloat(req.query.discount);
  res.send(calculateDiscountedPrice(price, discount));
});

function getGreeting(age, gender, name) {
  return 'Hello, ' + name + '! You are a ' + age + ' year old ' + gender + '.';
}

app.get('/personalized-greeting', (req, res) => {
  let age = req.query.age;
  let gender = req.query.gender;
  let name = req.query.name;
  res.send(getGreeting(age, gender, name));
});

function calculateFinalPrice(price, discount, rate) {
  let discountedPrice = price - (price * discount) / 100;
  let finalPrice = discountedPrice + discountedPrice * (rate / 100);
  return finalPrice.toString();
}

app.get('/final-price', (req, res) => {
  let price = parseFloat(req.query.price);
  let discount = parseFloat(req.query.discount);
  let rate = parseFloat(req.query.rate);
  res.send(calculateFinalPrice(price, discount, rate));
});

function calculateTotalExerciseTime(running, cycling, swimming) {
  return running + cycling + swimming;
}

app.get('/total-exercise-time', (req, res) => {
  let running = parseFloat(req.query.running);
  let cycling = parseFloat(req.query.cycling);
  let swimming = parseFloat(req.query.swimming);

  res.send(calculateTotalExerciseTime(running, cycling, swimming).toString());
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
