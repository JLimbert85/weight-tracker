const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const User = require("../models/user-model");

// Configure Passport with the local strategy for user authentication.
passport.use(
    new LocalStrategy(
        {
            usernameField: "email",
        },
        async (username, password, done) => {
            const q = await User.findOne({ email: username }).exec();
            if (!q || !q.validPassword(password)) {
                return done(null, false, {
                    message: "Incorrect credentials.",
                });
            }
            return done(null, q);
        },
    ),
);
