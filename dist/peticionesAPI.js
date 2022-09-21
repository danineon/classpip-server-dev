"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PeticionesAPIService = void 0;
const axios_1 = __importDefault(require("axios"));
const nodemailer = __importStar(require("nodemailer"));
const URL = __importStar(require("./urls"));
class PeticionesAPIService {
    DameAlumnosEquipo(equipoId) {
        return axios_1.default.get(URL.APIUrlEquipos + "/" + equipoId + "/alumnos");
    }
    DameAlumnosGrupo(grupoId) {
        return axios_1.default.get(URL.APIUrlGrupos + "/" + grupoId + "/alumnos");
    }
    // Si pasa tiempo sin enviar emails entonces en la cuenta de gmail se desactiva la opcion
    // de permitir el acceso a aplicaciones no seguras.
    // En ese caso hay que hacer lo siguiente:
    //Loguearse en gmail con la cuenta de classpip
    // Conectarse a esta url:
    // https://support.google.com/mail/?p=BadCredentials
    // ir a:
    // permitir que apps menos seguras accedan a tu cuenta.
    // Si está desactivada la opción "Acceso de apps menos seguras"
    // 
    // 
    EnviarEmail(email, nombre, contrasena) {
        console.log('Estoy dentro de EnviarEmail');
        console.log('creo las opciones');
        const mailOptions = {
            from: "Classpip",
            to: email,
            subject: "tu contraseña en Classpip",
            html: nombre + ", <br> Tu contraseña en classpip es: " + contrasena,
        };
        console.log('creo el transporter');
        const transporter = nodemailer.createTransport({
            auth: {
                user: "classpip2021@gmail.com",
                pass: "classpipUPC@2021" // Cambialo por tu password
            },
            service: "gmail",
        });
        // tslint:disable-next-line:only-arrow-functions
        console.log('voy a eviar email');
        transporter.sendMail(mailOptions, function (err, info) {
            if (err) {
                console.log(err);
            }
            else {
                console.log(info);
            }
        });
    }
    EnviarEmailRegistroAlumno(profesor, alumno) {
        console.log('voy a enviar emial a ' + alumno.Email);
        const transporter = nodemailer.createTransport({
            auth: {
                user: "classpip2021@gmail.com",
                pass: "classpipUPC@2021" // Cambialo por tu password
            },
            service: "gmail",
        });
        const mailOptions = {
            from: "Classpip",
            to: alumno.Email,
            subject: "registro en Classpip",
            html: "Has sido registrado en Classpip por tu profesor: <br>" +
                profesor.Nombre + " " + profesor.PrimerApellido + " " + profesor.SegundoApellido +
                "<br><br> Tus datos son: <br>" +
                "Nombre: " + alumno.Nombre + "<br>" +
                "Primer apellido: " + alumno.PrimerApellido + "<br>" +
                "Segundo apellido: " + alumno.SegundoApellido + "<br>" +
                "Nombre de usuario: " + alumno.Username + "<br>" +
                "Contraseña: " + alumno.Password + "<br>" +
                "Email: " + alumno.Email + "<br><br>" +
                // tslint:disable-next-line:max-line-length
                "En cuanto puedas por favor cambia tu contraseña (también puedes cambiar tu nombre de usuario) <br> <br>" +
                "Bienvenido a Classpip <br><br>" +
                "Recuerda que puedes acceder a la app conectándote a: <br>" +
                "classpip.upc.edu:8100",
        };
        // tslint:disable-next-line:only-arrow-functions
        transporter.sendMail(mailOptions, function (err, info) {
            if (err) {
                console.log(err);
            }
            else {
                console.log(info);
            }
        });
    }
}
exports.PeticionesAPIService = PeticionesAPIService;
//# sourceMappingURL=peticionesAPI.js.map