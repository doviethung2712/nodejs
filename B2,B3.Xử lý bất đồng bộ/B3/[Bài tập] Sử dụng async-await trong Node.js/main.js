async function Max(arr) {
  if (arr instanceof Array) {
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > max) {
        max = arr[i];
      }
    }
    return max;
  }
  throw new Error("Tham so khong phai mang");
}

async function f() {
  try {
    let result = await Max(1);
    console.log(result);
  } catch (e) {
    console.log(e);
  }
}
f();
