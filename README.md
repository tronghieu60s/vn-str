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

## Usage
### 1. Number To Text Vietnamese

Example:

```js
var vnStr = require('vn-str');
var str = vnStr.numToText(54);
console.log(str); // => "năm mươi tư"
```

### 2. Remove Vietnamese Tones

Example:

```js
var vnStr = require('vn-str');
var str = vnStr.rmVnTones("trường sa hoàng sa là của việt nam");
console.log(str); // => "truong sa hoang sa la cua viet nam"
```

### 3. Remove Non-Alphanumeric Vietnamese Characters

Example:

```js
var vnStr = require('vn-str');
var str = vnStr.rmNonAlphanumeric("Anh ta đã sưu tập nhiều các đồ vật kỳ lạ: trứng chim, tem, nắp chai, dây và cúc áo.");
console.log(str); // => "Anh ta đã sưu tập nhiều các đồ vật kỳ lạ trứng chim tem nắp chai dây và cúc áo"
```

## Contributing
Pull requests and stars are highly welcome.

For bugs and feature requests, please create an issue.
