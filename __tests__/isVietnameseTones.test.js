const { isVietnameseTones } = require("../dist/index");

test("a place where children go to learn", () => {
  expect(isVietnameseTones("a place where children go to learn")).toBe(false);
});

test("the students or students and teachers of a school", () => {
  expect(
    isVietnameseTones("the students or students and teachers of a school")
  ).toBe(false);
});

test("a group of people who share the same opinions, beliefs, or methods", () => {
  expect(
    isVietnameseTones(
      "a group of people who share the same opinions, beliefs, or methods"
    )
  ).toBe(false);
});

test("trường học, học đường, trường", () => {
  expect(isVietnameseTones("trường học, học đường, trường")).toBe(true);
});

test("chào em, anh đứng đây từ chiều", () => {
  expect(isVietnameseTones("chào em, anh đứng đây từ chiều")).toBe(true);
});

test("anh chào em, cho anh làm quen nhé", () => {
  expect(isVietnameseTones("anh chào em, cho anh làm quen nhé")).toBe(true);
});
