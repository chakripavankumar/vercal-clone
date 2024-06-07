import express from "express";
import cors from "cors";
import simpleGit from "simple-git";
import { generate } from "./utils";

const app = express();
app.use(cors());
app.use(express.json());

app.post("/deploy", async (req, res) => {
    const repoUrl = req.body.repoUrl;
    const id = generate();
    try {
        await simpleGit().clone(repoUrl, `files/${id}`);
        res.json({ id: id });
    } catch (error) {
        console.error("Error during cloning:", error);
        res.status(500).json({ error: "Failed to clone repository" });
    }
});


app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
