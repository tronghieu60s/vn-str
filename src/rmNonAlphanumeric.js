const rmNonAlphanumeric = (str) => {
    return str.replace(
      /[^0-9a-zàáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđ\s]/gi,
      ""
    );
}

module.exports = rmNonAlphanumeric;