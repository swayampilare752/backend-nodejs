const express = require("express");

const app = express();

const JobRoutes = require("./route/job.routes")
const Portno = 8080;

app.get("api/v1/job/create", (req, res) => {
res.json({
success: true,
message: "Create job api"
})
});

app.get("api/v1/job/list", (req, res) => {
res.json({
success: true,
message: "List job api"
});
});

app.post("api/v1/job/edit", (req, res) => {
res.json({
success: true,
message: "Edit job api"
});
});

app.post("api/v1/job/delete", (req, res) => {
res.json({
success: true,
message: "Delete job api"
});
});

app.listen(Portno, () => console.log(`Server Running at ${Portno}`));