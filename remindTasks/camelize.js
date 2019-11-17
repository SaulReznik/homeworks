function camelize(str){
  //Separate all words and push them itno array
  let arr = str.split('-');

  //Make all words of the array capitalaize
  let capital = arr.map((item, index) => index ? item.charAt(0).toUpperCase() + item.slice(1).toLowerCase() : item);

  //Make string again and return
  return capital.join("");
}

console.log(camelize("my-kebab-string"));
