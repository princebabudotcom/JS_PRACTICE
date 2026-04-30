const arr = [
  10, 80, 30, 40, 50, 60, 70, 20, 90, 100, 50, 30, 20, 10, 80, 30, 40, 50, 60,
  70, 20, 90, 100, 50, 30, 20, 10, 80, 30, 40, 50, 60, 70, 20, 90, 100,
];

// for (let i = 0; i < arr.length; i++) {
//   console.log(`${i} : ${arr[i]}`);
// }

let sum = 0;

arr.forEach((elem) => {
  sum += elem;
});

// console.log(sum);

// remove duplicates and sort in descending order
const newArr = [...new Set(arr)].sort((a, b) => b - a);

// count the duplicates

const count = {};

const newArr2 = [1, 2, 2, 3, 4, 5, 5, 6, 7];

newArr2.forEach((elem) => {
  if (count[elem]) {
    // if the element already exists in the count object, increment its count
    count[elem]++;
  } else {
    count[elem] = 1; // if the element does not exist in the count object, initialize its count to 1
  }
});

console.log(count);

// custom map method

const hap = (arr, cb) => {
  let newArr2 = [];

  for (let i = 0; i < arr.length; i++) {
    newArr2.push(cb(arr[i]));
  }

  return newArr2;
};

const happed = hap(arr, (elem) => elem + 100);

console.log(happed);
