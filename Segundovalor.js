function seconLangestNumber(numbers) {
    let primer = numbers[0]
    let second = 0;
    for (let i=0; i<numbers.length; i++) {
        if (numbers[i] > primer) {
            second = primer;
            primer = numbers[i]
        }
        if (numbers[i] > second && numbers[i] < primer) {
            second = numbers[i];
        }
    }
    return second
}
let nums = [8, 4, 6, 10, 9, 11]
console.log(seconLangestNumber(nums))
