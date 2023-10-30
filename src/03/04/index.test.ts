import { add, sub } from ".";

describe("四則演算", () => {
  describe("add", () => {
    describe("引数の範囲が不正な場合にエラーを投げる", () => {
      test("引数aの範囲は、'0~100'である", () => {
        expect(() => add(-1, 50)).toThrow(RangeError);
        expect(() => add(50, 101)).toThrow(RangeError);
      });
      test("引数bの範囲は、'0~100'である", () => {
        expect(() => add(-1, 50)).toThrow(RangeError);
        expect(() => add(101, 50)).toThrow(RangeError);
      });
    });

    describe("引数の範囲が正常な場合に適切に計算を行う", () => {
      test("返り値は、第一引数と第二引数の「和」である", () => {
        expect(add(50, 50)).toBe(100);
      });
      test("合計の上限は、'100'である", () => {
        expect(add(70, 80)).toBe(100);
      });
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
