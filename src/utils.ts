
export function getFactorializeJS(num: number): number {
  let result = num;
  if (num === 0 || num === 1) return 1;
  while (num > 1) {
    num--;
    result *= num;
  }
  return result;
}

export function getFactorializeFibJS(num: number): number {
  let a = 1,
    b = 0,
    temp;

  while (num >= 0) {
    temp = a;
    a = a + b;
    b = temp;
    getFactorializeJS(b);
    num--;
  }

  return b;
}
