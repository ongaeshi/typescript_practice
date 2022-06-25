// 巻き上げ
console.log(range(-10, -1));

function range(min: number, max: number): number[] {
    const result = [];
    for (let i = min; i <= max; i++) {
        result.push(i);
    }
    return result;
}

console.log(range(5, 10));
// console.log(range("5", 10));