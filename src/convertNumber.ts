const base = [
  "không",
  "một",
  "hai",
  "ba",
  "bốn",
  "năm",
  "sáu",
  "bảy",
  "tám",
  "chín",
];

const base_ten = [
  "mười",
  "hai mươi",
  "ba mươi",
  "bốn mươi",
  "năm mươi",
  "sáu mươi",
  "bảy mươi",
  "tám mươi",
  "chín mươi",
];

const base_hundred = [
  "không trăm",
  "một trăm",
  "hai trăm",
  "ba trăm",
  "bốn trăm",
  "năm trăm",
  "sáu trăm",
  "bảy trăm",
  "tám trăm",
  "chín trăm",
];

function getTen(number: string): string {
  const array = `${number}`.split("");
  const first = parseInt(array[0]);
  const second = parseInt(array[1]);
  if (second === 0) {
    return base_ten[first - 1];
  }
  if (second === 5) {
    return `${base_ten[first - 1]} lăm`;
  }
  if (second === 4) {
    return `${base_ten[first - 1]} tư`;
  }
  if (second === 1) {
    if (first === 1) {
      return `${base_ten[first - 1]} một`;
    }
    return `${base_ten[first - 1]} mốt`;
  }

  return `${base_ten[first - 1]} ${base[second]}`;
}

function getHundred(number: string): string {
  const array = `${number}`.split("");
  const first = parseInt(array[0]);
  const second = parseInt(array[1]);
  const third = parseInt(array[2]);
  if (second > 0) {
    return `${base_hundred[first]} ${getTen(`${second}${third}`)}`;
  }
  if (third === 0) {
    return `${base_hundred[first]}`;
  }
  if (third === 4) {
    return `${base_hundred[first]} linh tư`;
  }
  return `${base_hundred[first]} linh ${base[third]}`;
}

function getThousand(number: string): string {
  const reverse_array = `${number}`.split("").reverse();

  const after_number = reverse_array.slice(0, 3).reverse().join("");

  const before_number = parseInt(
    reverse_array.slice(3, reverse_array.length).reverse().join("")
  );

  const beforeLength = `${before_number}`.length;

  let afterText = "";

  if (parseInt(after_number) > 1) {
    afterText = getHundred(after_number);
  }

  if (beforeLength === 1) {
    return `${base[before_number]} nghìn ${afterText}`;
  }

  if (beforeLength === 2) {
    return `${getTen(`${before_number}`)} nghìn ${afterText}`;
  }

  return `${getHundred(`${before_number}`)} nghìn ${afterText}`;
}

function getMillion(number: string): string {
  const reverse_array = `${number}`.split("").reverse();
  const after_number = reverse_array.slice(0, 6).reverse().join("");
  const before_number = parseInt(
    reverse_array.slice(6, reverse_array.length).reverse().join("")
  );
  const beforeLength = `${before_number}`.length;

  let afterText = "";
  if (parseInt(after_number) > 999) {
    afterText = getThousand(after_number);
  } else if (parseInt(after_number) <= 999 && parseInt(after_number) >= 1) {
    afterText = getHundred(`${after_number}`.split("").slice(3, 6).join(""));
  }

  if (beforeLength === 1) {
    return `${base[before_number]} triệu ${afterText}`;
  }

  if (beforeLength === 2) {
    return `${getTen(`${before_number}`)} triệu ${afterText}`;
  }

  return `${getHundred(`${before_number}`)} triệu ${afterText}`;
}

function getBillion(number: string): string {
  const reverse_array = `${number}`.split("").reverse();

  const after_number = reverse_array.slice(0, 9).reverse().join("");

  const before_number = parseInt(
    reverse_array.slice(9, reverse_array.length).reverse().join("")
  );

  let afterText = "";
  if (parseInt(after_number) > 999999 && parseInt(after_number) <= 999999999) {
    afterText = getMillion(after_number);
  } else if (parseInt(after_number) <= 999999 && parseInt(after_number) > 999) {
    afterText = getThousand(`${after_number}`.split("").slice(3, 9).join(""));
  } else if (parseInt(after_number) <= 999 && parseInt(after_number) >= 1) {
    afterText = getHundred(`${after_number}`.split("").slice(6, 9).join(""));
  }

  const beforeLength = `${before_number}`.length;
  if (beforeLength === 1) {
    return `${base[before_number]} tỷ ${afterText}`;
  }

  if (beforeLength === 2) {
    return `${getTen(`${before_number}`)} tỷ ${afterText}`;
  }

  if (beforeLength === 3) {
    return `${getHundred(`${before_number}`)} tỷ ${afterText}`;
  }

  if (beforeLength > 3 && beforeLength <= 6) {
    return `${getThousand(`${before_number}`)} tỷ ${afterText}`;
  }

  if (beforeLength > 6 && beforeLength <= 9) {
    return `${getMillion(`${before_number}`)} tỷ ${afterText}`;
  }

  if (beforeLength > 9) {
    return `${getBillion(`${before_number}`)} tỷ ${afterText}`;
  }
}

export function numToText(number: number): string {
  if (number < 0) {
    return `âm ${numToText(Math.abs(number))}`;
  }

  const length = `${number}`.length;

  if (length === 1) {
    return base[number].trim();
  }
  if (length === 2) {
    return getTen(`${number}`).trim();
  }
  if (length === 3) {
    return getHundred(`${number}`).trim();
  }
  if (length > 3 && length <= 6) {
    return getThousand(`${number}`).trim();
  }
  if (length > 6 && length <= 9) {
    return getMillion(`${number}`).trim();
  }
  if (length > 9) {
    return getBillion(`${number}`).trim();
  }

  return null;
}
