let count = 1;

const interval = setInterval(() => {
    if (count <= 20) {
        console.log(count);
        count++;
    } else {
        clearInterval(interval);
    }
}, 100)