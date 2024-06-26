"use strict";
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
exports.uploadFile = void 0;
const aws_sdk_1 = require("aws-sdk");
const fs_1 = __importDefault(require("fs"));
const s3 = new aws_sdk_1.S3({
    accessKeyId: "89ddfeda621ffc4742de6eea401f139b",
    secretAccessKey: "9817a976c69c8b23c441bb9fdcda618c30509f87e795d083088feb089c51c462",
    endpoint: "https://b529916ff3d8c52f03435b6e05b14275.r2.cloudflarestorage.com"
});
// filename => output\ID\src\app.jsx
// filepath => \Users\siriy\OneDrive\Desktop\vercal\dist\output\ID\src\app.jsx
const uploadFile = (fileName, localFilePath) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("called");
    const fileContent = fs_1.default.readFileSync(localFilePath);
    const response = yield s3.upload({
        Body: fileContent,
        Bucket: "vercal",
        Key: fileName,
    }).promise();
    console.log(response);
});
exports.uploadFile = uploadFile;
