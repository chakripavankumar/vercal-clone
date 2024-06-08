import fs from "fs";
import path from "path";

export const getAllFiles = (folderPath :string)=> {
     let responce : string[] = [];

     const allFilesandFolders = fs.readdirSync(folderPath);
     //user/kirat/root/html
     allFilesandFolders.forEach ( file => {
        const fullFilePath = path.join(folderPath,file);
        if(fs.statSync(fullFilePath).isDirectory()){
            responce = responce.concat(getAllFiles(fullFilePath))
        } else{
            responce.push(fullFilePath)
        }
     });
     return responce;
}