var count = 0;
function updateCounter() {
    count = count + 1;
    setTimeout(updateCounter, 1000);
    console.log(count);
}

console.log()
updateCounter()
