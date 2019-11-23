
let counter = 1;
function count() {

    console.log(counter);
    counter++;
    let timer = setTimeout(count, 100);

    if (counter > 20) {
        clearTimeout(timer)
    }
}

count();
