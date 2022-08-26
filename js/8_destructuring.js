const fish = {
    name: 'King Hilsha',
    address: 'Chandpur',
    color: 'silver',
    phone: '017176588899',
    price: 4000
};

// const phone = fish.phone;
// const color = fish.color;
// const price = fish.price;

const { phone } = fish;

// console.log(fish);
// console.log(fish);
// console.log(fish);
// console.log(fish);
// console.log(fish);

const { age, name } = { name: 'almas', age: 56, profession: 'makeup artist' };
// console.log(age);

const { address } = fish;
// console.log(address);

// array destructuring
const [first, another] = [44, 99, 88, 456];
// console.log(first, another);

const nayoks = ['sakib', 'bappi', 'raj'];
const [king, lost, notun] = nayoks;
console.log(notun);

function getNames() {
    return ['alim', 'Halim'];
}
const [baba, chacha] = getNames();
console.log(baba, chacha);