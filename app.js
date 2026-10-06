const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send(`
        <h1>Cloud Deployment Successful!</h1>
        <p>This Node.js application is running on Render.</p>
    `);
});

app.get("/health", (req, res) => {
    res.json({
        status: "OK",
        message: "Application is healthy"
    });
});

app.listen(PORT, "0.0.0.0", () => {
    console.log("Server running on port " + PORT);
});
