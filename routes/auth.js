// // const express = require("express");
// // const router = express.Router();

// // const {
// //   signup,
// //   signin,
// //   signout,
// //   requireSignin,
// // } = require("../controllers/auth");
// // // router.post("/signup", signup);
// // const { userSignupValidator } = require("../validator");
// // router.post("/signup", userSignupValidator, signup);
// // router.post("/signin", signin);
// // router.get("/signout", signout);

// // module.exports = router;

const express = require("express");
const router = express.Router();

const { signup, signin, signout } = require("../controllers/auth");
const { userSignupValidator } = require("../validator");

router.post("/signup", userSignupValidator, signup);
router.post("/signin", signin);
router.get("/signout", signout);

module.exports = router;
