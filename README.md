# Trang web thương mại điện tử

##Mô tả
TMDT là một trang web mã nguồn mở được viết bằng:
- Front-end: ReactJS, Bootstrap 5, Redux
- Back-end: NodeJS, ExpressJS, MongoDB

##Tính năng
- Người dùng: Đăng ký tài khoản, đăng nhập, tìm kiếm, tìm kiếm nâng cao dựa trên thể loại, theo sản phẩm vào giỏ, quản lý sản phẩm, quản lý hồ sơ người dùng, đổi mật khẩu, thanh toán, xem trạng thái đơn hàng.
- Admin: Quản lý sản phẩm, thêm sản phẩm, quản lý và cập nhật trạng thái đơn hàng, xem thông số bán hàng, quản lý người dùng.

##Cài đặt
Clone source về máy và tiến hành cài đặt như sau

Clone:
```sh
git clone https://github.com/khoipn21/TMDT-main.git
```

Vào từng thư mục của từng phần và cài đặt các Dependencies và chạy từng phần, ví dụ:
```sh
cd dashboard
npm i
npm start
```
Làm tương tự với `Mainpage` và `Server`

**Lưu ý: Đối với `server` phải khởi tạo thêm file .env như sau
```sh
PORT = PORT_SERVER
NODE_ENV
JWT_SECRET = shopthuongmai
PAYPAL_CLIENT_ID = paypal_id
MONGO_URL= MONGO_URL
```
Trong đó:
- `PORT_SERVER`: là port mà `server` khởi chạy, đổi lại URL trong file .env của `dashboard` và `mainpage` cho trùng với `PORT_SERVER` của bạn (Ví dụ `PORT=3000` thì hãy đổi URL trong file .env của `dashboard` và `mainpage` thành `http://localhost:3000`)
- `MONGO_URL`: là URL link đến database MongoDB của bạn

##Contribution
**Phạm Ngọc Khôi**: https://github.com/khoipn21
**Cao Quốc Việt**: https://github.com/CaoQuocViet
