const { strToTelex } = require("../dist/index");

const EXPECT_1 = "Việt Nam";
const ACTUAL_1 = "Vieejt Nam";

test(EXPECT_1, () => {
  expect(strToTelex(EXPECT_1)).toBe(ACTUAL_1);
});

const EXPECT_2 = "Trường Sa, Hoàng Sa là của Việt Nam";
const ACTUAL_2 = "Truwowfng Sa, Hoafng Sa laf cura Vieejt Nam";

test(EXPECT_2, () => {
  expect(strToTelex(EXPECT_2)).toBe(ACTUAL_2);
});

const EXPECT_3 =
  "Việt Nam, tên chính thức là Cộng hòa Xã hội chủ nghĩa Việt Nam";
const ACTUAL_3 =
  "Vieejt Nam, teen chisnh thuwsc laf Coojng hofa Xax hooji chur nghixa Vieejt Nam";

test(EXPECT_3, () => {
  expect(strToTelex(EXPECT_3)).toBe(ACTUAL_3);
});
