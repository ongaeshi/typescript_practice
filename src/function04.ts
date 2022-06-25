{
    type Human = {
        height: number;
        weight: number;
    };
    
    const uhyo: Human = { height: 1.84, weight: 72 };
    
    // // アロー関数式(arrow function expression)で関数を作る
    // const calcBMI = ({ weight, height }: Human): number => {
    //     return weight / height ** 2;
    // }

    // 省略形
    const calcBMI = ({ 
        weight, height
     }: Human): number => weight / height ** 2;
    
    console.log(calcBMI(uhyo));    

    type ReturnObj = {
        bmi: number
    }

    const calcBMIObject = ({
        height, weight
    }: Human): ReturnObj => ({
        bmi: weight / height ** 2
    })

    console.log(calcBMIObject(uhyo))
    console.log(calcBMIObject({ weight: 70, height: 1.74}))
}

