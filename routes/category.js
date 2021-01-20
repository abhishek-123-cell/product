const express = require("express");
const router = express.Router();

const {
  create,
  categoryById,
  read,
  remove,
  update,
  list,
} = require("../controllers/category");
const { requireSignin, isAuth, isAdmin } = require("../controllers/auth");
const { userById } = require("../controllers/user");
router.param("userId", userById);
router.param("categoryId", categoryById);

// // const { userSignupValidator } = require("../validator");
router.post("/category/create/:userId", create, requireSignin, isAuth, isAdmin);
router.get("category/:categoryId", read);
router.put("/category/create/:userId", update, requireSignin, isAuth, isAdmin);
router.delete(
  "/category/create/:userId",
  remove,
  requireSignin,
  isAuth,
  isAdmin
);
router.get("categories", list);

// // router.param("userId", userById);
// // router.param("categoryId", categoryById);

// // module.exports = router;
// const express = require("express");
// const router = express.Router();

// const {
//   create,
//   categoryById,
//   read,
//   update,
//   remove,
//   list,
// } = require("../controllers/category");
// const { requireSignin, isAuth, isAdmin } = require("../controllers/auth");
// const { userById } = require("../controllers/user");

// router.get("/category/:categoryId", read);
// router.post("/category/create/:userId", requireSignin, isAuth, isAdmin, create);
// // router.put('/category/:categoryUpdateId/:userId', requireSignin, isAuth, isAdmin, update);
// router.put(
//   "/category/:categoryId/:userId",
//   requireSignin,
//   isAuth,
//   isAdmin,
//   update
// );

// router.delete(
//   "/category/:categoryId/:userId",
//   requireSignin,
//   isAuth,
//   isAdmin,
//   remove
// );
// router.get("/categories", list);

// router.param("categoryId", categoryById);
// router.param("userId", userById);

module.exports = router;
