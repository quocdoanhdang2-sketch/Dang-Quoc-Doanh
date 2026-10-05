# Ghi chú UI/UX

## 1. Nghiên cứu và định hướng
Các mẫu đăng ký phổ biến thường ưu tiên một nhiệm vụ chính, ít trường dữ liệu, nhãn rõ ràng, thông báo lỗi gần trường nhập và CTA nổi bật. Thiết kế bài này áp dụng các đặc điểm đó nhưng không sao chép giao diện của một thương hiệu cụ thể.

## 2. Tính khả dụng
- Bố cục theo thứ tự đọc từ trên xuống.
- Chỉ có một CTA chính: **Đăng ký tài khoản**.
- Thông báo lỗi cụ thể thay vì chỉ báo “không hợp lệ”.
- Người dùng có thể xem/ẩn mật khẩu.
- Trang xác nhận cho biết rõ thao tác đã hoàn thành.

## 3. Fitts' Law
- Nút chính: cao tối thiểu 52px, rộng toàn bộ form.
- Input: cao tối thiểu 50px.
- Nút hiện/ẩn mật khẩu nằm sát trường cần điều khiển.
- CTA nằm ngay sau trường cuối, giảm khoảng di chuyển con trỏ/ngón tay.

## 4. Responsive
- Desktop: phần giới thiệu và form chia hai cột.
- Tablet/mobile: chuyển thành một cột.
- Khoảng đệm giảm trên điện thoại để giữ form dễ đọc.

## 5. Accessibility
- Mỗi input có `label`.
- Dùng `autocomplete` phù hợp.
- Lỗi có `aria-live="polite"`.
- Trường sai dùng `aria-invalid`.
- Có trạng thái focus rõ ràng cho bàn phím.
- Hạn chế chuyển động khi người dùng bật reduced motion.

## 6. Lý do chọn thiết kế
Tông xanh tạo cảm giác rõ ràng và tin cậy, nền sáng giúp form dễ đọc. Card form có độ rộng giới hạn để mắt không phải di chuyển quá xa. Luồng hai bước phù hợp đúng yêu cầu: nhập thông tin và nhận xác nhận thành công.
