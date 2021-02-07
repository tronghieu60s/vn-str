const numToStr = require("../src/numToStr");

test("ba nghìn", () => {
  expect(numToStr(3000).trim()).toBe("ba nghìn");
});

test("năm mươi tư", () => {
  expect(numToStr(54).trim()).toBe("năm mươi tư");
});

test("9999999999", () => {
  expect(numToStr(9999999999).trim()).toBe(
    "chín tỷ chín trăm chín mươi chín triệu chín trăm chín mươi chín nghìn chín trăm chín mươi chín"
  );
});

test("âm ba nghìn", () => {
  expect(numToStr(-3000).trim()).toBe("âm ba nghìn");
});

test(`âm năm mươi tư`, () => {
  expect(numToStr(-54).trim()).toBe("âm năm mươi tư");
});

test("-9999999999", () => {
  expect(numToStr(-9999999999).trim()).toBe(
    "âm chín tỷ chín trăm chín mươi chín triệu chín trăm chín mươi chín nghìn chín trăm chín mươi chín"
  );
});

test("- 0", () => {
  expect(numToStr(-0)).toBe("không");
});