// reduce method

const myNums = [1,2,3];

// const myTotal = myNums.reduce((acc, value) => {
//     console.log(`acc: ${acc} and value: ${value}`);
//     return acc + value;
// }, 0);// initial value of accumulator

const myTotal = myNums.reduce((acc,value) => acc+value,0)

console.log(myTotal);

const shoppingCart = [
    {
        itemName: "Js course",
        price: 2999
    },
    {
        itemName: "Java Course",
        price: 7466
    },
    {
        itemName: "Data Science",
        price: 12587
    },
]

const priceToPay = shoppingCart.reduce((sum,value) => sum+value.price , 0)
console.log(priceToPay);
