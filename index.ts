const {
  hasOffensiveWords,
  isVietnamesePhoneNumber,
  isVietnameseTones,
} = require("./src/validateString");
const { numToText } = require("./src/convertNumber");
const { rmNonAlphanumeric, rmVnTones } = require("./src/removeString");
const { strToTelex, strToVNI } = require("./src/convertString");

module.exports.hasOffensiveWords = hasOffensiveWords;
module.exports.isVietnamesePhoneNumber = isVietnamesePhoneNumber;
module.exports.isVietnameseTones = isVietnameseTones;
module.exports.numToText = numToText;
module.exports.rmNonAlphanumeric = rmNonAlphanumeric;
module.exports.rmVnTones = rmVnTones;
module.exports.strToTelex = strToTelex;
module.exports.strToVNI = strToVNI;
