const { numToText } = require("../dist/index");

test("ba nghìn", () => {
  expect(numToText(3000)).toBe("ba nghìn");
});

test("năm mươi tư", () => {
  expect(numToText(54)).toBe("năm mươi tư");
});

test("năm nghìn", () => {
  expect(numToText(5000)).toBe("năm nghìn");
});

test("9999999999", () => {
  expect(numToText(9999999999)).toBe(
    "chín tỷ chín trăm chín mươi chín triệu chín trăm chín mươi chín nghìn chín trăm chín mươi chín"
  );
});

test("âm ba nghìn", () => {
  expect(numToText(-3000)).toBe("âm ba nghìn");
});

test(`âm năm mươi tư`, () => {
  expect(numToText(-54)).toBe("âm năm mươi tư");
});

test("-9999999999", () => {
  expect(numToText(-9999999999)).toBe(
    "âm chín tỷ chín trăm chín mươi chín triệu chín trăm chín mươi chín nghìn chín trăm chín mươi chín"
  );
});

test("- 0", () => {
  expect(numToText(-0)).toBe("không");
});
