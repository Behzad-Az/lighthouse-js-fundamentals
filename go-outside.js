var raining = false;
var cold = true;
var temperature = 4;

if (!raining) {
  console.log("leave your umbrella at home");
}

if (temperature < -40 || temperature > 40) {
  console.log("Maybe going outside isn't such a great idea…");
} else if (temperature < 0) {
  console.log("Make sure you pick out a scarf!");
} else if (temperature < 15) {
  console.log("Short sleeves won't cut it.");
} else {
  console.log("Short sleeves are fine.");
}

console.log("Now you're ready to go outside!");