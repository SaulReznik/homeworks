const isEmpty = obj => Object.getOwnPropertyNames(obj).length === 0 ? true: false;

console.log(isEmpty({test: "something"}));
