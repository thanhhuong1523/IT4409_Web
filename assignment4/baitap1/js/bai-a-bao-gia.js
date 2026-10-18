/* BÀI A — ĐIỀN VÀO CHỖ TRỐNG: Phiếu báo giá in thiệp
   Thay mỗi ___(n)___ bằng đáp án của bạn.
   - Chỗ trống nằm trong CODE: điền từ khoá / toán tử / ký hiệu còn thiếu.
   - Chỗ trống nằm trong CHÚ THÍCH ("in ra: ..."): điền kết quả bạn DỰ ĐOÁN, chưa chạy vội.
   File chỉ chạy được khi mọi chỗ trống trong code đã được điền. */

// ---------- Phần 1: Khai báo ----------
// (1) Tên xưởng không bao giờ được gán lại.
___(1)___ TEN_XUONG = "Blakletterpress";
const DON_GIA = 1200;        // đồng / thiệp
const VAT_PHAN_TRAM = 10;

// (2) Số lượng sẽ được cập nhật ở Phần 2, và chỉ được dùng trong phạm vi khối (block scope).
___(2)___ soLuong = 300;

// ---------- Phần 2: Kiểu dữ liệu & so sánh ----------
// Giá trị lấy từ ô nhập của form LUÔN là chuỗi.
const nhapThem = "200";

console.log(soLuong + nhapThem);    // in ra: ___(3)___
console.log(nhapThem == 200);       // in ra: ___(4)___
console.log(nhapThem === 200);      // in ra: ___(5)___

soLuong = soLuong + Number(nhapThem);   // Number("200") đổi chuỗi thành số → soLuong = 500

// ---------- Phần 3: Scope ----------
// (6) giamGia được gán lại bên trong khối if và phải dùng được SAU khối if.
___(6)___ giamGia = 0;
if (soLuong >= 500) {
	giamGia = 10;                        // giảm 10 %
	const lyDo = "Đơn từ 500 thiệp";
}
// Nếu bỏ dấu chú thích ở dòng dưới, trình duyệt báo lỗi loại gì?  → ___(7)___
// console.log(lyDo);

// ---------- Phần 4: Hoisting ----------
console.log(maDon);                 // in ra: ___(8)___
var maDon = "BL-001";
// Nếu đổi `var` thành `let` ở dòng trên thì dòng console.log(maDon) sẽ: ___(9)___

// ---------- Phần 5: null / undefined ----------
let ghiChu;                         // khách không nhập ghi chú
// (10) Điều kiện phải ĐÚNG khi ghiChu là null HOẶC undefined,
//      SAI khi ghiChu là "" hoặc 0, và chỉ dùng MỘT phép so sánh.
if (ghiChu ___(10)___ null) {
	ghiChu = "(không có)";
}

// ---------- Phần 6: Kiểu tham chiếu ----------
const donMau = { giay: "Cotton 300gsm", soLuong: 100 };
const donKhach = donMau;
donKhach.soLuong = soLuong;

console.log(donMau.soLuong);        // in ra: ___(11)___
console.log(donMau === donKhach);   // in ra: ___(12)___
// Trong hai dòng sau, dòng nào báo lỗi?  (A) donMau.giay = "Kraft";   (B) donMau = {};   → ___(13)___

// ---------- Phần 7: ASI (tự chèn dấu chấm phẩy) ----------
function tinhTien(sl, giam) {
	const tamTinh = sl * DON_GIA;
	const tienGiam = tamTinh * giam / 100;
	const vat = (tamTinh - tienGiam) * VAT_PHAN_TRAM / 100;
	return ___(14)___
		tamTinh: tamTinh,
		tienGiam: tienGiam,
		vat: vat,
		tong: tamTinh - tienGiam + vat
	};
}
// Nếu viết `return` một mình một dòng rồi mới xuống dòng mở ngoặc, tinhTien(500, 10) trả về: ___(15)___

// ---------- Phần 8: Template literal ----------
const tien = tinhTien(soLuong, giamGia);

const phieu = ___(16)___=== ${TEN_XUONG} ===
Số lượng : ___(17)___ thiệp
Tạm tính : ${tien.tamTinh} đ
Giảm giá : ${tien.tienGiam} đ (${giamGia} %)
VAT      : ${tien.vat} đ
Tổng     : ${tien.tong} đ
Ghi chú  : ${ghiChu}___(16)___;

// ---------- Phần 9: Console ----------
console.___(18)___(phieu);                                        // in thông tin thông thường
console.___(19)___([donMau, { giay: "Kraft", soLuong: 200 }]);    // in mảng object dưới dạng BẢNG

hienThi(phieu);
