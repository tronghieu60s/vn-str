/**
 * Check Vietnamese Phone Number
 * @param  {string} str
 */
export function isVietnamesePhoneNumber(str: string) {
  return /((^(\+84|84|0|0084){1})(3|5|7|8|9))+([0-9]{8})$/.test(str);
}

/**
 * Check Any Vietnamese Tones In String
 * @param  {string} str
 */
export function isVietnameseTones(str: string) {
  return str
    .split("")
    .map((o) =>
      new RegExp(
        "^[ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ]+$"
      ).test(o)
    )
    .some((o) => o);
}
