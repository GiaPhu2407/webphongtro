const jwt  = require("jsonwebtoken");
//jwt để tạo or check token

 const authenticateToken = (req, res, next) => {
    const token = req.cookies.token;
    
    if (!token) {
        return res.redirect('/login');
    }
    //xác minh jwt
    jwt.verify(token, 'secret_key',(err, user) => {
        if (err) {
            return res.redirect('/login');
        }
        req.user = user;
        next();
    });
};

module.exports = {authenticateToken}