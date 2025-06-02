import express from "express";
import { nanoid } from 'nanoid';
import fs from "node:fs";
import path from "path";
import { fileURLToPath } from "url";

const app = express();

// ES Module workaround to get __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Helper function
const isUrlValid = (url) => {
    try {
        new URL(url);
        return true;
    } catch (err) {
        return false;
    }
};

// Middleware
app.use(express.urlencoded({ extended: true }));

// Serve home page
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

// Shorten URL
app.post("/shorten", (req, res) => {
    if (!isUrlValid(req.body.longUrl)) {
        res.status(400).json({
            success: false,
            message: "Invalid URL"
        });
        return;
    }

    const shortUrl = nanoid(8);

    let urlsFromFile = {};
    if (fs.existsSync("urls.json")) {
        const fileData = fs.readFileSync("urls.json");
        urlsFromFile = JSON.parse(fileData.toString());
    }

    urlsFromFile[shortUrl] = req.body.longUrl;
    fs.writeFileSync("urls.json", JSON.stringify(urlsFromFile));

    res.json({
        success: true,
        shortUrl: `http://localhost:8080/${shortUrl}`
    });
});

// Redirect to long URL
app.get("/:shortUrl", (req, res) => {
    if (!fs.existsSync("urls.json")) {
        return res.status(404).send("Short URL not found");
    }

    const fileData = fs.readFileSync("urls.json");
    const urlsFromFile = JSON.parse(fileData.toString());
    const longUrl = urlsFromFile[req.params.shortUrl];

    if (longUrl) {
        res.redirect(longUrl);
    } else {
        res.status(404).send("Short URL not found");
    }
});

app.listen(8080, () => console.log("Server is up and running at port 8080"));
