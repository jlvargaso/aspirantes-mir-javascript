function sum(num){
    let i = 1;
    let x = 0;
    while (i <= num) {
        x+= i;
        i++;       
    }
    return x;
}
console.log(sum(4)) // 1 + 2 + 3 + 4 = 10
console.log(sum(10)) // 55
console.log(sum(15)) // 120