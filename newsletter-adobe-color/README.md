# Bài thực hành: Phối màu Newsletter với Adobe Color

## Mục tiêu
Tạo hai phiên bản newsletter có cùng cấu trúc Bootstrap nhưng sử dụng hai bộ màu khác nhau để quan sát tác động của màu sắc đến cảm nhận thị giác.

## Cấu trúc
- `index.html`: trang chọn phiên bản.
- `newsletter_version1.html`: phiên bản 1 — Ocean Focus.
- `newsletter_version2.html`: phiên bản 2 — Sunset Studio.
- `styles.css`: CSS bố cục dùng chung.

## Palette 1 — Ocean Focus
Quy tắc: **Analogous / cùng họ xanh**.

- Primary: `#0C66E4`
- Secondary: `#579DFF`
- Accent/Dark: `#0055CC`
- Light: `#CCE0FF`
- Text: `#172B4D`

Cảm nhận: rõ ràng, tin cậy, tập trung, gần với ngôn ngữ thị giác của các công cụ quản lý công việc.

## Palette 2 — Sunset Studio
Quy tắc: **tương phản tím – vàng cam**.

- Primary: `#7C3AED`
- Secondary/CTA: `#F59E0B`
- Accent/Dark: `#4C1D95`
- Light: `#FDE68A`
- Text: `#1F2937`

Cảm nhận: sáng tạo, năng động, ấm áp và tạo điểm nhấn CTA mạnh hơn.

## UI/UX đã áp dụng
- Bootstrap Grid cho responsive.
- Header, nội dung chính, CTA, các card và footer.
- Màu dùng nhất quán theo vai trò: primary, secondary, accent, light, text.
- Nội dung dài dùng nền sáng/chữ tối để dễ đọc.
- CTA có độ tương phản cao và vùng bấm lớn.
- Hai phiên bản giữ nguyên cấu trúc để việc so sánh tác động của màu sắc rõ ràng hơn.

## Cách chạy
Mở `index.html` trực tiếp trong trình duyệt hoặc:

```powershell
cd D:\Projects\Dang-Quoc-Doanh\newsletter-adobe-color
python -m http.server 5500
```

Sau đó mở `http://localhost:5500`.

## Cách nộp
Dán link thư mục repository này hoặc link repository chính theo yêu cầu bài tập.
