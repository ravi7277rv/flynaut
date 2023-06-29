const router = require('express').Router();

const loginController = require('../controller/user/Login');
const dashboardController = require('../controller/user/Dashboard');
const signupController = require('../controller/user/Signup');

const notAuth = require('../middlewares/notAuth');
const isAuth = require('../middlewares/isAuth');

router.route('/')
.get( notAuth, loginController.get )
.post( notAuth, loginController.post );

router.route('/signup')
.get( notAuth, signupController.get )
.post( notAuth, signupController.post );

router.route('/dashboard')
.get( isAuth, dashboardController.get )
.post( isAuth, dashboardController.post );

router.route('/logout')
.get(loginController.logout);




module.exports = router;