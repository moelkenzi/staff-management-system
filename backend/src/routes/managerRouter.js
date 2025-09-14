const express = require("express");
const {
  createManager,
  listManagers,
  getManagerById,
  updateManager,
  deleteManager,
  toggleManagerActive,
} = require("../controllers/managerCntrol"); // adjust path if needed

// Optional auth (uncomment if you use it)
// const { verifyToken, isAdmin } = require("../../middleWare/Auth");

const router = express.Router();

/* RESTful */
router.post("/", createManager);
router.get("/", /*verifyToken,*/ listManagers);
router.get("/:id", /*verifyToken,*/ getManagerById);
router.patch("/:id", /*verifyToken, isAdmin,*/ updateManager);
router.delete("/:id", /*verifyToken, isAdmin,*/ deleteManager);
router.patch("/:id/toggle", /*verifyToken, isAdmin,*/ toggleManagerActive);

/* Legacy-style aliases (optional, if your frontend already calls these) */
// router.post("/createManager/Manager", /*verifyToken, isAdmin,*/ createManager);
// router.get("/readManager/Manager", /*verifyToken,*/ listManagers);
// router.get("/readManagerSingal/Manager/:id", /*verifyToken,*/ getManagerById);
// router.patch("/updateManager/Manager/:id", /*verifyToken, isAdmin,*/ updateManager);
// router.delete("/deleteManager/Manager/:id", /*verifyToken, isAdmin,*/ deleteManager);
// router.patch("/toggleManager/Manager/:id", /*verifyToken, isAdmin,*/ toggleManagerActive);

module.exports = router;
