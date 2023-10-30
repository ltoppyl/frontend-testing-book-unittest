const checkArgRange = (value: number) => {
  if (value < 0 || 100 < value) {
    throw new RangeError("入力値は0~100の範囲で入力してください");
  }
};

export function add(a: number, b: number) {
  checkArgRange(a);
  checkArgRange(b);

  const sum = a + b;
  if (sum > 100) {
    return 100;
  }
  return sum;
}

export function sub(a: number, b: number) {
  const sum = a - b;
  if (sum < 0) {
    return 0;
  }
  return sum;
}
