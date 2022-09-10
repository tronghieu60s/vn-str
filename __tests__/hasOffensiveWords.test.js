const { hasOffensiveWords } = require("../dist/index");

test("óc chó này, tao nhịn mày đủ rồi đấy!", () => {
  expect(hasOffensiveWords("óc chó này, tao nhịn mày đủ rồi đấy!")).toBe(true);
});

test("iu em nhất trên đời", () => {
  expect(hasOffensiveWords("iu em nhất trên đời")).toBe(false);
});

test("đây là một câu bình thường, cho đến khi thêm từ chửi bậy, đm.", () => {
  expect(
    hasOffensiveWords(
      "đây là một câu bình thường, cho đến khi thêm từ chửi bậy, đm."
    )
  ).toBe(true);
});
