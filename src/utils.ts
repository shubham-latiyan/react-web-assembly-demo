export function getFactorialJS(num: number): number {
  let result = num;
  if (num === 0 || num === 1) return 1;
  while (num > 1) {
    num--;
    result *= num;
  }
  return result;
}

export function getFactorialFibJS(num: number): number {
  let a = 1,
    b = 0,
    temp;

  while (num >= 0) {
    temp = a;
    a = a + b;
    b = temp;
    getFactorialJS(b);
    num--;
  }

  return b;
}
