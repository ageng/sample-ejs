## Simple ejs template implementation to Express

```
1. install express > npm -g install express
2. buat direktori kerja dengan cara $express -e <nama_direktori>
3. masuk ke direktori dan install package yang di butuhkan > npm install
```
## langkah selanjutnya
```
Kita akan membuat sebuah halaman static menggunakan json sebagai datanya,
siapkan dulu file json nya.
```
## next
```
Setelah membuat file json yang digunakan untuk ditampilkan datanya, selanjutnya
kita konfigurasi file app.js
```
#penjelasan
```javascript

Modul dan variable yang di butuhkan

	var express = require('express');
	var fs = require('fs');
	var app = express();
```

