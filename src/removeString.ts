/**
 * Remove Vietnamese Tones
 * @param  {string} str
 */
export function rmVnTones(str: string) {
  return str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d")
    .replace(/Đ/g, "D");
}

/**
 * Remove Non-Alphanumeric Vietnamese Characters
 * @param  {string} str
 */
export function rmNonAlphanumeric(str: string) {
  return str.replace(
    /[^0-9a-zàáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđ\s]/gi,
    ""
  );
}
