import { add, sub } from ".";

describe("四則演算", () => {
  describe("add", () => {
    test("返り値は、第一引数と第二引数の「和」である", () => {
      expect(add(50, 50)).toBe(100);
    });
    test("合計の上限は、'100'である", () => {
      expect(add(70, 80)).toBe(100);
    });
    test("引数aの範囲は、'0~100'である", () => {
      expect(() => add(-1, 50)).toThrowError("入力値は0~100の範囲で入力してください");
      expect(() => add(101, 50)).toThrowError("入力値は0~100の範囲で入力してください");
    });
    test("引数bの範囲は、'0~100'である", () => {
      expect(() => add(-1, 50)).toThrowError("入力値は0~100の範囲で入力してください");
      expect(() => add(50, 101)).toThrowError("入力値は0~100の範囲で入力してください");
    });
  });
  describe("sub", () => {
    test("返り値は、第一引数と第二引数の「差」である", () => {
      expect(sub(51, 50)).toBe(1);
    });
    test("返り値の合計は、下限が'0'である", () => {
      expect(sub(70, 80)).toBe(0);
    });
  });
});
