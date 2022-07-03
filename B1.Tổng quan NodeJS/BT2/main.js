let arr = [
  {
    name: "Ha",
    gender: "female",
    poin: 8,
  },
  {
    name: "Huy",
    gender: "male",
    poin: 9,
  },
  {
    name: "Hung",
    gender: "male",
    poin: 7,
  },
  {
    name: "Phuong",
    gender: "female",
    poin: 6,
  },
  {
    name: "Huyen",
    gender: "female",
    poin: 10,
  },
  {
    name: "Long",
    gender: "male",
    poin: 5,
  },
  {
    name: "Luan",
    gender: "male",
    poin: 10,
  },
  {
    name: "Linh",
    gender: "female",
    poin: 8,
  },
];
let genderMale = arr.filter((e) => e.gender === "male");
let genderFemale = arr.filter((e) => e.gender === "female");
// console.log(genderMale);
const avg = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i].poin;
  }
  return sum / arr.length;
};
console.log(avg(genderMale));
console.log(avg(genderFemale));
