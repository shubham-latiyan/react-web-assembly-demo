// The entry file of your WebAssembly module.

export function add(a: i32, b: i32): i32 {
  return a + b;
}

export function getFactorialWasm(num: u32): u32 {
  let result = num;

  if (num === 0 || num === 1) {
    return 1;
  }
  while (num > 1) {
    num = num - 1;
    result = result * num;
  }
  return result;
}

export function getFactorialFibWasm(n: u32): u32 {
  let a: u32 = 0;
  let temp: u32 = 0;
  let b: u32 = 1;

  let i: u32 = 1;

  while (i < n) {
    a = temp;
    temp = b;
    b = a + temp;
    getFactorialWasm(b);
    i = i + 1;
  }
  return b;
}
