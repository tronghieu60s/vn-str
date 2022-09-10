const { strToVNI } = require("../dist/index");

const EXPECT_1 = "Việt Nam";
const ACTUAL_1 = "Vie65t Nam";

test(EXPECT_1, () => {
  expect(strToVNI(EXPECT_1)).toBe(ACTUAL_1);
});

const EXPECT_2 = "Trường Sa, Hoàng Sa là của Việt Nam";
const ACTUAL_2 = "Tru7o72ng Sa, Hoa2ng Sa la2 cu3a Vie65t Nam";

test(EXPECT_2, () => {
  expect(strToVNI(EXPECT_2)).toBe(ACTUAL_2);
});

const EXPECT_3 =
  "Việt Nam, tên chính thức là Cộng hòa Xã hội chủ nghĩa Việt Nam";
const ACTUAL_3 =
  "Vie65t Nam, te6n chi1nh thu71c la2 Co65ng ho2a Xa4 ho65i chu3 nghi4a Vie65t Nam";

test(EXPECT_3, () => {
  expect(strToVNI(EXPECT_3)).toBe(ACTUAL_3);
});
