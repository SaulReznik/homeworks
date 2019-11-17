const lastDay = (year, month) => {
    //Setting date to the next month from required
    //And set day to the 0, that will bring us the last day of our month
    let date = new Date(year, month + 1, 0);

    //Get only day from the whole date objcet
    return date.getDate();
}

console.log(lastDay(2016, 1));
