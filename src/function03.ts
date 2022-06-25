type Human = {
    height: number;
    weight: number;
};

const uhyo: Human = { height: 1.84, weight: 72 };

// 関数宣言の場合、巻き上げはできない
// console.log(calcBMI(uhyo));

// const calcBMI = function(human: Human): number {
//     return human.weight / human.height ** 2;
// }

// 分割代入
const calcBMI = function({ weight, height }: Human): number {
    return weight / height ** 2;
}

console.log(calcBMI(uhyo));
