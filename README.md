*Read this in other languages: [Tiếng Việt](README-vn.md).*

## What is this?

✂ Vietnamese string processing library.

## Installation

Using npm:

```bash
$ npm install --save vn-str
```

Using yarn:

```bash
$ yarn add vn-str
```

Using CDN:

```html
<!-- When using CDN you can call all function in vnStr variable. -->
<script src="https://tronghieu60s.github.io/vn-str/dist/index.js"></script>
```

## Usage

### 1. Number To Text Vietnamese

Example:

```js
var vnStr = require("vn-str");
var str = vnStr.numToText(54);
console.log(str); // => "năm mươi tư"
```

### 2. Remove Vietnamese Tones

Example:

```js
var vnStr = require("vn-str");
var str = vnStr.rmVnTones("Trường Sa Hoàng Sa là của Việt Nam");
console.log(str); // => "Truong Sa Hoang Sa la cua Viet Nam"
```

### 3. Remove Non-Alphanumeric Vietnamese Characters

Example:

```js
var vnStr = require("vn-str");
var str = vnStr.rmNonAlphanumeric("Anh ta đã sưu tập nhiều các đồ vật kỳ lạ: trứng chim, tem, nắp chai, dây và cúc áo.");
console.log(str); // => "Anh ta đã sưu tập nhiều các đồ vật kỳ lạ trứng chim tem nắp chai dây và cúc áo"
```

### 4. Convert String Vietnamese To Unicode Telex / VNI

Example:

```js
var vnStr = require("vn-str");
var str = "Trường Sa, Hoàng Sa là của Việt Nam";

var strTelex = vnStr.strToTelex(str);
console.log(strTelex); // => "Truwowfng Sa, Hoafng Sa laf cura Vieejt Nam"

var strVNI = vnStr.strToVNI(str);
console.log(strVNI); // => "Tru7o72ng Sa, Hoa2ng Sa la2 cu3a Vie65t Nam"
```

### 5. Check Vietnamese Phone Number

Example:

```js
var vnStr = require("vn-str");
var isVietnamesePhone = vnStr.isVietnamesePhoneNumber("+84957507468");
console.log(isVietnamesePhone); // => true
```

### 6. Check Vietnamese Tones

Example:

```js
var vnStr = require("vn-str");
var isVietnameseTones = vnStr.isVietnameseTones("Chào em, anh đứng đây từ chiều");
console.log(isVietnameseTones); // => true
```

### 7. Check Sentences With Offensive Words

Data: https://github.com/blue-eyes-vn/vietnamese-offensive-words

Example:

```js
var vnStr = require("vn-str");
var hasOffensiveWords = vnStr.hasOffensiveWords("đây là một câu bình thường, cho đến khi thêm từ chửi bậy, đm.");
console.log(hasOffensiveWords); // => true
```

## Contributing

Pull requests and stars are highly welcome.

For bugs and feature requests, please create an issue.
