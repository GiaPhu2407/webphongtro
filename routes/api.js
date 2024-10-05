const express = require('express');
const routerAPI = express.Router();
const {postRegisterUsersAPI,
    postLoginUsersAPI,
    logoutUsersAPI,
    verify,sendResetLinkEmail,
    reset,showResetForm,
    // postRegisterAdminAPI
}
 = require('../controllers/apiController')  
const {authenticateToken} = require('../middlewares/authMiddleware');


routerAPI.post('/register', postRegisterUsersAPI );
routerAPI.post('/login',postLoginUsersAPI );

routerAPI.get('/login', (req, res) => {
    res.render('login');
});

routerAPI.get('/register', (req, res) => {
    res.render('register');
});
// routerAPI.post('/register-admin', postRegisterAdminAPI);

routerAPI.get('/logout', logoutUsersAPI);


routerAPI.get('/', (req, res)=> {
    res.render('home', {user: req.user});
});

routerAPI.get('/dashboard', authenticateToken, (req, res)=> {
    if(req.user.rule === "admin") {
        res.render('dashboard', {user: req.user});
    }else { 
        res.status(403).send("access denied");
    }
});
//form foget pass
routerAPI.get('/password/reset', (req, res) => {
    res.render('passwords/email');
})
routerAPI.post('/password/email', sendResetLinkEmail);

routerAPI.get('/password/reset/:email', showResetForm);

routerAPI.post('/password/reset', reset);


routerAPI.get('/verify',verify);
module.exports = routerAPI; 