const rmVnTones = require('../src/rmVnTones');

const EXPECT_1 = "trường sa hoàng sa là của việt nam";
const ACTUAL_1 = "truong sa hoang sa la cua viet nam";

test(EXPECT_1, () => {
  expect(rmVnTones(EXPECT_1).trim()).toBe(ACTUAL_1);
});


const EXPECT_2 =
  "Xây dựng cầu đường là một trong những ngành thuộc lĩnh vực xây dựng cơ bản";
const ACTUAL_2 =
  "Xay dung cau duong la mot trong nhung nganh thuoc linh vuc xay dung co ban";

test(EXPECT_2, () => {
  expect(rmVnTones(EXPECT_2).trim()).toBe(ACTUAL_2);
});


const EXPECT_3 =
  "Việt Nam, tên chính thức là Cộng hòa Xã hội chủ nghĩa Việt Nam";
const ACTUAL_3 =
  "Viet Nam, ten chinh thuc la Cong hoa Xa hoi chu nghia Viet Nam";

test(EXPECT_3, () => {
  expect(rmVnTones(EXPECT_3).trim()).toBe(ACTUAL_3);
});