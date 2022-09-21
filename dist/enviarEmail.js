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
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnviarEmailService = void 0;
const nodemailer = __importStar(require("nodemailer"));
class EnviarEmailService {
    EnviarEmail() {
        const transporter = nodemailer.createTransport({
            auth: {
                user: 'classpipupc@gmail.com',
                pass: 'mimara00.' // Cambialo por tu password
            },
            service: "gmail",
        });
        const mailOptions = {
            from: "classpip",
            to: "miguel.valero@upc.edu",
            subject: "tu contraseña",
            html: " Tu contraseña en classpip es esta XXXX",
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
exports.EnviarEmailService = EnviarEmailService;
//# sourceMappingURL=enviarEmail.js.map