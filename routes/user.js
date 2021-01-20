const express = require("express");
const router = express.Router();

const { userById } = require("../controllers/user");
const { requireSignin, isAuth, isAdmin } = require("../controllers/auth");

router.param("userId", userById);
router.get("/secret/:userId", requireSignin, isAuth, isAdmin, (req, res) => {
  res.json({
    user: req.profile,
  });
});
module.exports = router;

// const { requireSignin, isAuth, isAdmin } = require("../controllers/auth");

// const {
//   userById,
//   read,
//   update,
//   purchaseHistory,
// } = require("../controllers/user");

// router.get("/secret", requireSignin, (req, res) => {
//   res.json({
//     user: "got here yay",
//   });
// });

// router.get("/user/:userId", requireSignin, isAuth, read);
// router.put("/user/:userId", requireSignin, isAuth, update);
// router.get("/orders/by/user/:userId", requireSignin, isAuth, purchaseHistory);
