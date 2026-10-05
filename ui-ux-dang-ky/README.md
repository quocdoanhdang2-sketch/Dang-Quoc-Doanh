# Bài thực hành UI/UX — Trang đăng ký người dùng

## Mục tiêu
Thực hành thiết kế hướng người dùng với một luồng đăng ký ngắn, dễ hiểu, có phản hồi lỗi rõ ràng và responsive.

## Hai trang bắt buộc
1. `index.html` — Form đăng ký: Họ và tên, Email, Mật khẩu, Xác nhận mật khẩu.
2. `success.html` — Xác nhận đăng ký thành công.

## Phần trình bày thiết kế
- `wireframe.html` — wireframe và giải thích luồng người dùng.
- `wireframe.svg` — bản phác thảo có thể mở/chụp ảnh trực tiếp.
- `UI-UX-NOTES.md` — ghi chú nguyên tắc UI/UX đã áp dụng.

## Điểm UI/UX đã áp dụng
- Label luôn hiển thị; placeholder chỉ đóng vai trò ví dụ.
- Chỉ thu thập 4 trường thông tin theo yêu cầu.
- Trường bắt buộc được đánh dấu `*`.
- Có hướng dẫn ngắn cho email và mật khẩu.
- Validation phía client, lỗi đặt ngay dưới trường nhập.
- Focus tự chuyển tới lỗi đầu tiên để người dùng sửa nhanh.
- Nút chính rộng 100%, cao 52px; input tối thiểu 50px nhằm tạo vùng thao tác lớn.
- Có nút Hiện/Ẩn mật khẩu.
- Responsive: 2 cột desktop, 1 cột trên màn hình nhỏ.
- Có focus-visible và `aria-live` để tăng khả năng truy cập.
- Tôn trọng `prefers-reduced-motion`.

## Fitts' Law
Fitts' Law cho biết thời gian trỏ/chạm tới một mục tiêu phụ thuộc vào kích thước mục tiêu và khoảng cách tới nó. Vì vậy nút Đăng ký được đặt ngay sau các trường, chiếm toàn bộ chiều rộng form và có chiều cao lớn; các input cũng có vùng chạm rộng.

## Luồng người dùng
Mở trang → đọc tiêu đề → nhập Họ tên → Email → Mật khẩu → Xác nhận mật khẩu → xác nhận thông tin → nhấn Đăng ký → nếu lỗi thì nhận thông báo tại trường → nếu hợp lệ chuyển tới trang thành công.

## Chạy bài
Mở trực tiếp `index.html`, hoặc chạy:
```bash
python -m http.server 5500
```
Sau đó truy cập thư mục `ui-ux-dang-ky/`.

## Gợi ý chụp ảnh để nộp
1. Chụp `index.html` ở desktop.
2. Thu nhỏ cửa sổ hoặc dùng DevTools mobile để chụp responsive.
3. Điền dữ liệu hợp lệ và chụp `success.html`.
4. Mở `wireframe.svg` hoặc `wireframe.html` và chụp wireframe.
