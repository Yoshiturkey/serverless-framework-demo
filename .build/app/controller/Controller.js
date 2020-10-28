"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Controller {
    response(code, data) {
        return {
            statusCode: code,
            body: JSON.stringify(data),
        };
    }
}
exports.default = Controller;
//# sourceMappingURL=Controller.js.map