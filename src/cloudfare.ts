import {S3} from "aws-sdk";
import fs from "fs";


const s3= new S3({
    accessKeyId: "89ddfeda621ffc4742de6eea401f139b",
    secretAccessKey: "9817a976c69c8b23c441bb9fdcda618c30509f87e795d083088feb089c51c462" ,
    endpoint: "https://b529916ff3d8c52f03435b6e05b14275.r2.cloudflarestorage.com"
})

// filename => output\ID\src\app.jsx
// filepath => \Users\siriy\OneDrive\Desktop\vercal\dist\output\ID\src\app.jsx
export const uploadFile = async ( fileName: string , localFilePath : string) =>{
    const fileContent =  fs.readFileSync(localFilePath);
    const response = await s3.upload({
        Body: fileContent,
        Bucket: "vercal",
        Key: fileName,
    }).promise();
    console.log(response);
    
}


