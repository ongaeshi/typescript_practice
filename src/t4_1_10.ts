{
    type User = { name: string; age: number }
    const getName = (u: User): string => u.name
    const users: User[] = [
        { name: "uhyo", age: 26 },
        { name: "John Smith", age: 15}
    ]

    const names = users.map(getName);
    console.log(names)

    // 引数や戻り値の省略
    console.log(users.map((u) => u.age))

    // 20歳以上のユーザーだけの配列
    const adultUsers = users.filter((user) => user.age >= 20)
    console.log(adultUsers)

    // すべてのユーザーが20歳以上ならtrue
    const allAdult = users.every((user) => user.age >= 20)
    console.log(allAdult)

    // 60歳以上のユーザーが1人でもいればtrue
    const seniorExists = users.some((user) => user.age >= 60)
    console.log(seniorExists)

    // 名前がJohnで始まるユーザーを探して返す
    const john = users.find((user) => user.name.startsWith("John"))
    console.log(john)

    // findAllはない？
}

