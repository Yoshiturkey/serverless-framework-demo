"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dayjs_1 = __importDefault(require("dayjs"));
const timezone_1 = __importDefault(require("dayjs/plugin/timezone"));
const utc_1 = __importDefault(require("dayjs/plugin/utc"));
const Controller_1 = __importDefault(require("./Controller"));
class ServiceController extends Controller_1.default {
    async index() {
        dayjs_1.default.extend(utc_1.default);
        dayjs_1.default.extend(timezone_1.default);
        return this.response(200, {
            message: 'Hello My API [GET /]',
            access: dayjs_1.default().tz('Asia/Tokyo').format(),
        });
    }
    async create(event) {
        const response = {
            statusCode: 201,
            body: undefined,
        };
        try {
            const data = JSON.parse(event.body);
            response.body = JSON.stringify({
                created: true,
                params: data,
                message: 'Request data is not stored in any resource.',
            });
        }
        catch {
            response.statusCode = 400;
            response.body = JSON.stringify({
                message: 'Allow Content-Type is JSON Only.',
            });
        }
        return response;
    }
}
exports.default = ServiceController;
//# sourceMappingURL=ServiceController.js.map