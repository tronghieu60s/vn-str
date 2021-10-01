const { isVietnamesePhoneNumber } = require("./src/validateString");
const { numToText } = require("./src/convertNumber");
const { rmNonAlphanumeric, rmVnTones } = require("./src/removeString");
const { strToTelex, strToVNI } = require("./src/convertString");

module.exports.isVietnamesePhoneNumber = isVietnamesePhoneNumber;
module.exports.numToText = numToText;
module.exports.rmNonAlphanumeric = rmNonAlphanumeric;
module.exports.rmVnTones = rmVnTones;
module.exports.strToTelex = strToTelex;
module.exports.strToVNI = strToVNI;
