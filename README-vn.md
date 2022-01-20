*Đọc bằng ngôn ngữ khác: [English](README.md).*

## Đây là gì?

✂ Thư viện xử lí chuỗi Tiếng Việt.

## Cài Đặt

Sử dụng npm:

```bash
$ npm install --save vn-str
```

Sử dụng yarn:

```bash
$ yarn add vn-str
```

Sử dụng CDN:

```html
<!-- Khi sử dụng CDN bạn có thể gọi tất cả function bằng biến vnStr. -->
<script src="https://tronghieu60s.github.io/vn-str/dist/index.js"></script>
```

## Sử Dụng

### 1. Chuyển Số Thành Chữ Tiếng Việt

Ví dụ:

```js
var vnStr = require("vn-str");
var str = vnStr.numToText(54);
console.log(str); // => "năm mươi tư"
```

### 2. Xóa Dấu Tiếng Việt

Ví dụ:

```js
var vnStr = require("vn-str");
var str = vnStr.rmVnTones("Trường Sa Hoàng Sa là của Việt Nam");
console.log(str); // => "Truong Sa Hoang Sa la cua Viet Nam"
```

### 3. Xóa Các Ký Tự Không Phải Chữ Và Số Tiếng Việt

Ví dụ:

```js
var vnStr = require("vn-str");
var str = vnStr.rmNonAlphanumeric("Anh ta đã sưu tập nhiều các đồ vật kỳ lạ: trứng chim, tem, nắp chai, dây và cúc áo.");
console.log(str); // => "Anh ta đã sưu tập nhiều các đồ vật kỳ lạ trứng chim tem nắp chai dây và cúc áo"
```

### 4. Chuyển Chuỗi Tiếng Việt Sang Telex / VNI

Ví dụ:

```js
var vnStr = require("vn-str");
var str = "Trường Sa, Hoàng Sa là của Việt Nam";

var strTelex = vnStr.strToTelex(str);
console.log(strTelex); // => "Truwowfng Sa, Hoafng Sa laf cura Vieejt Nam"

var strVNI = vnStr.strToVNI(str);
console.log(strVNI); // => "Tru7o72ng Sa, Hoa2ng Sa la2 cu3a Vie65t Nam"
```

### 5. Kiểm Tra Số Điện Thoại Việt Nam

Ví dụ:

```js
var vnStr = require("vn-str");
var isVietnamesePhone = vnStr.isVietnamesePhoneNumber("+84957507468");
console.log(isVietnamesePhone); // => true
```

### 6. Kiểm Tra Dấu Tiếng Việt

Ví dụ:

```js
var vnStr = require("vn-str");
var isVietnameseTones = vnStr.isVietnameseTones("Chào em, anh đứng đây từ chiều");
console.log(isVietnameseTones); // => true
```

## Contributing

Pull requests và stars rất được hoan nghênh.

Đối với bug và yêu cầu tính năng, vui lòng tạo issue.
