"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllFiles = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const getAllFiles = (folderPath) => {
    let responce = [];
    const allFilesandFolders = fs_1.default.readdirSync(folderPath);
    //user/kirat/root/html
    allFilesandFolders.forEach(file => {
        const fullFilePath = path_1.default.join(folderPath, file);
        if (fs_1.default.statSync(fullFilePath).isDirectory()) {
            responce = responce.concat((0, exports.getAllFiles)(fullFilePath));
        }
        else {
            responce.push(fullFilePath);
        }
    });
    return responce;
};
exports.getAllFiles = getAllFiles;
