var ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

var ingCounter = 0;
console.log("-------------- While Loop ----------------------");
while (ingCounter < ingredients.length){
  console.log(ingredients[ingCounter]);
  ingCounter++;
}
console.log("\n -------------- For Loop ----------------------");
for (var i=0; i<ingredients.length;i++){
  console.log(ingredients[i]);
}

console.log("\n----------- For Loop Backwards ------------------");
for (var i=ingredients.length-1; i>=0; i--){
  console.log(ingredients[i]);
}