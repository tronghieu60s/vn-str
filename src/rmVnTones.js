const rmVnTones = (str) => {
  const newStr = str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d")
    .replace(/Đ/g, "D");
  return newStr;
}

module.exports = rmVnTones;