"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.create = exports.index = void 0;
const ServiceController_1 = __importDefault(require("./controller/ServiceController"));
const Service = new ServiceController_1.default();
exports.index = async () => {
    return Service.index();
};
exports.create = async (event) => {
    return Service.create(event);
};
//# sourceMappingURL=handler.js.map