const rmNonAlphanumeric = require("../src/rmNonAlphanumeric");

const EXPECT_1 = `Khi tôi vội vàng, mệt mỏi, lạnh lùng, lười biếng hoặc tức giận, đôi khi tôi để lại dấu chấm câu.`;
const ACTUAL_1 = `Khi tôi vội vàng mệt mỏi lạnh lùng lười biếng hoặc tức giận đôi khi tôi để lại dấu chấm câu`;

test(EXPECT_1, () => {
  expect(rmNonAlphanumeric(EXPECT_1).trim()).toBe(ACTUAL_1);
});


const EXPECT_2 = `"Ngữ pháp là ngu ngốc! Tôi có thể viết mà không cần nó,"`;
const ACTUAL_2 = `Ngữ pháp là ngu ngốc Tôi có thể viết mà không cần nó`;

test(EXPECT_2, () => {
  expect(rmNonAlphanumeric(EXPECT_2).trim()).toBe(ACTUAL_2);
});

const EXPECT_3 = `Anh ta đã sưu tập nhiều các đồ vật kỳ lạ: trứng chim, tem, nắp chai, dây và cúc áo.`;
const ACTUAL_3 = `Anh ta đã sưu tập nhiều các đồ vật kỳ lạ trứng chim tem nắp chai dây và cúc áo`;

test(EXPECT_3, () => {
  expect(rmNonAlphanumeric(EXPECT_3).trim()).toBe(ACTUAL_3);
});