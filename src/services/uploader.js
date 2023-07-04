import multer from "multer";
import __dirname from "../utils.js";

const storage = multer.diskStorage({
    destination: function (req, file, cb){
        cb(null, `${__dirname}/public/img`)
    },
    filaname :function (req, file,cb){
        cb(null,`${date.now()}-${file.originalname}`)
    }
})

const uploader = multer ({storage})

export default uploader;