const numToText = require("../src/numToText");

test("ba nghìn", () => {
  expect(numToText(3000).trim()).toBe("ba nghìn");
});

test("năm mươi tư", () => {
  expect(numToText(54).trim()).toBe("năm mươi tư");
});

test("9999999999", () => {
  expect(numToText(9999999999).trim()).toBe(
    "chín tỷ chín trăm chín mươi chín triệu chín trăm chín mươi chín nghìn chín trăm chín mươi chín"
  );
});

test("âm ba nghìn", () => {
  expect(numToText(-3000).trim()).toBe("âm ba nghìn");
});

test(`âm năm mươi tư`, () => {
  expect(numToText(-54).trim()).toBe("âm năm mươi tư");
});

test("-9999999999", () => {
  expect(numToText(-9999999999).trim()).toBe(
    "âm chín tỷ chín trăm chín mươi chín triệu chín trăm chín mươi chín nghìn chín trăm chín mươi chín"
  );
});

test("- 0", () => {
  expect(numToText(-0)).toBe("không");
});