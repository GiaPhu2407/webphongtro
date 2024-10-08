const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const fileUpload = require('express-fileupload');
const path = require('path');
const APIRouter = require('./routes/api');
require('dotenv').config();

const app = express();

// Sử dụng CORS
app.use(cors({
  origin: 'http://localhost:3000', // URL FE của bạn
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true, // Nếu bạn sử dụng cookie để lưu token JWT
  preflightContinue: false,
}));

// Middleware để xử lý dữ liệu từ form
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Middleware xử lý upload file
app.use(fileUpload());
// Middleware phục vụ tệp tĩnh
app.use(express.static(path.join(__dirname, 'public')));
// Middleware cookie
app.use(cookieParser());

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

console.log(path.join(__dirname, 'views'));

// Sử dụng router
app.use(APIRouter);

const PORT = process.env.PORT || 3005;

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});
