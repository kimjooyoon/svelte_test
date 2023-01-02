import {expect, test} from "vitest";
import {IntArrayBySize} from "$lib/functions/NumberUtil.js";

test("IntArrayBySize", () => {
  expect(IntArrayBySize(0)).toStrictEqual([]);
  expect(IntArrayBySize(1)).toStrictEqual([1]);
  expect(IntArrayBySize(2)).toStrictEqual([1, 2]);
  expect(IntArrayBySize(5)).toStrictEqual([1, 2, 3, 4, 5]);
  expect(IntArrayBySize()).toStrictEqual([]);
});

