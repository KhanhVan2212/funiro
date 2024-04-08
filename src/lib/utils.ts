import axios from 'axios';
import { clsx, ClassValue} from 'clsx';
import { twMerge } from 'tailwind-merge'
const CLOUDINARY_NAME = "deizvf4pg";
const CLOUDINARY_UPLOAD_PRESET = "furniro";
const CLOUDINARY_FOLDER = "furniro";

export function cn(...inputs: ClassValue[]){
    return twMerge(clsx(inputs))
}
export async function uploadFile(file: File){
     const formData = new FormData();
     formData.append("file",file);
     formData.append("upload_preset",CLOUDINARY_UPLOAD_PRESET);
     formData.append("folder",CLOUDINARY_FOLDER);
    try {
        const response = await axios.post(
            `https://api.cloudinary.com/v1_1/${CLOUDINARY_NAME}/image/upload` , formData
        );
            if(response.status === 200){
                return response.data;
            } else{
                console.error("Upload failed:" , response.statusText);
            }
    } catch (error) {
        console.error("Error upload file:" , error);
    }
}