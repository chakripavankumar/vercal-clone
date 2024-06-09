// 89ddfeda621ffc4742de6eea401f139b -> Access key iD
//  9817a976c69c8b23c441bb9fdcda618c30509f87e795d083088feb089c51c462  -> Scret key Id
// https://b529916ff3d8c52f03435b6e05b14275.r2.cloudflarestorage.com -> URL

import express from "express";
import cors from "cors";
import path from "path";
import simpleGit from "simple-git";
import { generate } from "./utils";
import { getAllFiles } from "./file";
import { uploadFile } from "./cloudfare";




 uploadFile('output\vunak\src\App.jsx' , 'C:\\Users\\siriy\\OneDrive\\Desktop\\vercal\\dist\\output\\ vunak\\src\\App.jsx');
const app = express();
app.use(cors());
app.use(express.json());



app.post("/deploy", async (req, res) => {
    const repoUrl = req.body.repoUrl;
    const id = generate();
    try {
        await simpleGit().clone(repoUrl, path.join(__dirname,`output/${id}`) );
        const files= getAllFiles(path.join(__dirname,`output/${id}`));
     console.log(files);
    } catch (error) {
        console.error("Error during cloning:", error);
        res.status(500).json({ error: "Failed to clone repository" });
    }
});


app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
