const LocalStrategy = require('passport-local').Strategy;
const User = require('../modules/userModule');
const bcrypt = require('bcryptjs');
const passport = require('passport');



exports.exports =  function(){

    passport.use('local-login',new LocalStrategy({ usernameField: 'email' }, async (email, password, done) => {
   console.log(email,password);
        try {
            const user = await User.findOne({ email: email });
            console.log(user)
            if (!user) { return done(null, false,); }

            const isMatch = await bcrypt.compare(password, user.password)
            console.log(isMatch)
            if (!isMatch) {
                return done(null, false);
            }

            // Authentication successful
            return done(null, user);
        } catch (error) {
            return done(error, false);
        }

    }))

    passport.serializeUser((user, done) => {
        done(null, user.id);
    });

    passport.deserializeUser(async (id, done) => {
        try {
            const user = await User.findById(id);

            done(null, user);
        } catch (error) {
            done(error, flase);
        }
    })

}


exports.isAuthenticated = (req, res, next) => {
    if (req.user) return next();

    res.redirect('/');
}