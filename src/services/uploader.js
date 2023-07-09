import multer from "multer"; // MIDDLEWARE ----sirve para cargar archivos de terceros
import __dirname from "../utils.js";

const storage = multer.diskStorage({// diskStorage tipo de almacenamiento en el disco de mi proyecto
    destination: function (req, file, cb){// por defecto un destino
        cb(null, `${__dirname}/public/img`)//cb: define donde guardo, null: errores de carga, destino de carga
    },
    filaname :function (req, file,cb){// filaname: captura lo cargado de los usuario en segundos
        cb(null,`${date.now()}-${file.originalname}`)// date.now: en que milisegundo fue cargado un archivo, file.originalname: mi archivo con los segundos que fue cargado
    }
})

const uploader = multer ({storage})

export default uploader;