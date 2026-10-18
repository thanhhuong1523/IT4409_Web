/* BÀI B — VIẾT CODE: Lọc tin và đăng tin nhanh (news.html)
   Viết code theo đặc tả.
   Không sửa news.html, không sửa css; chỉ viết JavaScript trong file này. */

// ---------- ĐÃ CHO SẴN (không sửa) ----------
// Chặn việc gửi form tìm kiếm khi nhấn Enter, để trang không bị tải lại.
document.querySelector("#searchbar form").addEventListener("submit", (e) => e.preventDefault());

// ---------- PHẦN BẠN VIẾT ----------

// F1. Bộ đếm "Đang hiển thị x/y tin" trong #bo-dem.
// F2 + F3. Lọc tin khi gõ vào #o-tim-kiem (sự kiện keyup) và thông báo #khong-thay.
const oTimKiem = document.getElementById("o-tim-kiem");
const dsList = document.getElementById("list");
const boDem = document.getElementById("bo-dem");
const khongThay = document.getElementById("khong-thay");
const oTieuDe = document.getElementById("tin-tieu-de");
const oNoiDung = document.getElementById("tin-noi-dung");
const nutDang = document.getElementById("nut-dang");
const baoLoi = document.getElementById("bao-loi");

function capNhatLoc() {
	const tuKhoa = oTimKiem.value.toLowerCase();
	const cacMuc = Array.from(dsList.querySelectorAll("li"));
	let soHien = 0;

	for (const muc of cacMuc) {
		const vanBan = muc.querySelector("h3").textContent + " " + muc.querySelector("p").textContent;
		if (tuKhoa === "" || vanBan.toLowerCase().includes(tuKhoa)) {
			muc.classList.remove("an");
			soHien++;
		} else {
			muc.classList.add("an");
		}
	}

	boDem.textContent = `Đang hiển thị ${soHien}/${cacMuc.length} tin`;

	if (soHien === 0) {
		khongThay.classList.remove("an");
		khongThay.textContent = `Không tìm thấy tin nào cho "${oTimKiem.value}"`;
	} else {
		khongThay.classList.add("an");
	}
}

oTimKiem.addEventListener("keyup", capNhatLoc);
capNhatLoc();

// F4. Nút "Read more >>" / "Thu gọn <<" — MỘT trình lắng nghe đặt trên #list.
dsList.addEventListener("click", (e) => {
	if (e.target.matches("button.more")) {
		const nut = e.target;
		const doan = nut.closest("li").querySelector("p");
		if (doan.classList.contains("day-du")) {
			doan.classList.remove("day-du");
			nut.textContent = "Read more >>";
		} else {
			doan.classList.add("day-du");
			nut.textContent = "Thu gọn <<";
		}
	}
});

// F5. Nút #nut-dang: kiểm tra dữ liệu, tạo <li> mới, chèn vào đầu #list.
nutDang.addEventListener("click", () => {
	const tieuDe = oTieuDe.value.trim();
	const noiDung = oNoiDung.value.trim();

	if (tieuDe === "" || noiDung === "") {
		baoLoi.textContent = "Vui lòng nhập đủ tiêu đề và nội dung.";
		return;
	}

	const liMoi = document.createElement("li");

	const spanTime = document.createElement("span");
	spanTime.className = "time";
	spanTime.textContent = homNay();

	const h3 = document.createElement("h3");
	h3.textContent = oTieuDe.value;

	const p = document.createElement("p");
	p.textContent = oNoiDung.value;

	const btnMore = document.createElement("button");
	btnMore.type = "button";
	btnMore.className = "more";
	btnMore.textContent = "Read more >>";

	liMoi.append(spanTime, h3, p, btnMore);
	dsList.prepend(liMoi);

	oTieuDe.value = "";
	oNoiDung.value = "";
	baoLoi.textContent = "";

	capNhatLoc();
});
