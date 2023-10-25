import { ID, storage } from "@/appwrite";

const uploadImage = async (file: File) => {
    if (!file) return; 

    const fileUploaded = await storage.createFile(
        "652599bd6fc64c254fb5", 
        ID.unique(), 
        file
    ); 
    return fileUploaded; 
}; 

export default uploadImage; 