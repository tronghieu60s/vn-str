const { isVietnamesePhoneNumber } = require("../dist/index");

test("+84957507468", () => {
  expect(isVietnamesePhoneNumber("+84957507468")).toBe(true);
});

test("+8495750746", () => {
  expect(isVietnamesePhoneNumber("+8495750746")).toBe(false);
});

test("+80957507468", () => {
  expect(isVietnamesePhoneNumber("+80957507468")).toBe(false);
});

test("034321186", () => {
  expect(isVietnamesePhoneNumber("034321186")).toBe(false);
});

test("0343211869", () => {
  expect(isVietnamesePhoneNumber("0343211869")).toBe(true);
});

test("0543211869", () => {
  expect(isVietnamesePhoneNumber("0543211869")).toBe(true);
});

test("0743211869", () => {
  expect(isVietnamesePhoneNumber("0743211869")).toBe(true);
});

test("0843211869", () => {
  expect(isVietnamesePhoneNumber("0843211869")).toBe(true);
});

test("0943211869", () => {
  expect(isVietnamesePhoneNumber("0943211869")).toBe(true);
});
