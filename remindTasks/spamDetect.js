const isSpam = str => str.toUpperCase() === "XXX" ? true : false; 

console.log(isSpam("XXX"));
console.log(isSpam("XXx"));
console.log(isSpam("XeroX"));
