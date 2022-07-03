let day = new Date();
let current = day.getDate();

let arr = [
  "thứ ba",
  "thứ tư",
  "thứ năm",
  "thứ sáu",
  "thứ bảy",
  "chủ nhật",
  "thứ hai",
];

for (let i = 0; i < arr.length; i++) {
  if (i == current) {
    console.log(`Hom nay là ${arr[i]}`);
  }
}
