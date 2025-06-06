const express = require("express");

const router = express.Router();


router.get("api/v1/job/create", (req, res) => {
res.json({
success: true,
message: "Create job api"
})
});

router.get("api/v1/job/list", (req, res) => {
res.json({
success: true,
message: "List job api"
});
});

router.post("api/v1/job/edit", (req, res) => {
res.json({
success: true,
message: "Edit job api"
});
});

router.post("api/v1/job/delete", (req, res) => {
res.json({
success: true,
message: "Delete job api"
});
});

module.exports = router;