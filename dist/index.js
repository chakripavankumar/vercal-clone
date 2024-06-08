"use strict";
// 89ddfeda621ffc4742de6eea401f139b -> Access key iD
//  9817a976c69c8b23c441bb9fdcda618c30509f87e795d083088feb089c51c462  -> Scret key Id
// https://b529916ff3d8c52f03435b6e05b14275.r2.cloudflarestorage.com -> URL
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const path_1 = __importDefault(require("path"));
const simple_git_1 = __importDefault(require("simple-git"));
const utils_1 = require("./utils");
const file_1 = require("./file");
const cloudfare_1 = require("./cloudfare");
(0, cloudfare_1.uploadFile)("\dist\output\vunak\package.json", "C:\Users\siriy\OneDrive\Desktop\vercal\dist\output\vunak\package.json");
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.post("/deploy", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const repoUrl = req.body.repoUrl;
    const id = (0, utils_1.generate)();
    try {
        yield (0, simple_git_1.default)().clone(repoUrl, path_1.default.join(__dirname, `output/${id}`));
        const files = (0, file_1.getAllFiles)(path_1.default.join(__dirname, `output/${id}`));
        console.log(files);
    }
    catch (error) {
        console.error("Error during cloning:", error);
        res.status(500).json({ error: "Failed to clone repository" });
    }
}));
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
