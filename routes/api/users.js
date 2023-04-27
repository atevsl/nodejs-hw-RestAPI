const express = require("express");

const ctrl = require("../../controllers/users");

const { validateBody, authenticate } = require("../../middlewares");

const router = express.Router();

const { schemas } = require("../../models/user");

router.post("/register", validateBody(schemas.registerSchema), ctrl.register);
router.post("/login", validateBody(schemas.loginSchema), ctrl.login);
router.get("/current", authenticate, ctrl.getCurrent);
router.post("/logout", authenticate, ctrl.logout);

router.patch("/", authenticate, ctrl.subscriptionUpd);

module.exports = router;
