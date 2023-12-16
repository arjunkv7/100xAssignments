let count = 0;

function startCounter() {
    setInterval(increaseCount, 1000);
   
}

function increaseCount() {
    count += 1;
    console.log(count);
}

startCounter();