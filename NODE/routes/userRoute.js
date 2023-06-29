const router = require('express').Router();
const loginController = require('../controllers/loginController');
const profileController = require('../controllers/profileController');
const signupControllers = require('../controllers/signupControllers');





router.get('/',loginController.get)
router.post('/',loginController.post)


router.get('/signup',signupControllers.get);
router.post('/signup',signupControllers.post);

router.get('/profile',profileController.getProfilePage)


// auth logout
router.get('/logout', (req, res) => {
    req.logOut(function (err) {
        if (err) {
            // Handle error if any
            console.error(err);
            return res.status(500).send('Error logging out');
        }
        res.redirect('/');
    });
});



module.exports = router;