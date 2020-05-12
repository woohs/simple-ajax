"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const xhr_1 = __importDefault(require("./xhr"));
function ajaxPost(url, data, type = 'GET') {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
            xhr_1.default({
                url: url,
                type,
                data: JSON.stringify(data),
                withCredentials: false,
                header: {
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'application/json',
                    Accept: 'application/json,text/javascript'
                },
                success: (res) => {
                    resolve(res);
                },
                fail: (err) => {
                    reject(err || new Error('Ajax error'));
                }
            });
        });
    });
}
exports.ajaxPost = ajaxPost;
