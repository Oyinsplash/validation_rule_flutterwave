"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var http_errors_1 = __importDefault(require("http-errors"));
var express_1 = __importDefault(require("express"));
var morgan_1 = __importDefault(require("morgan"));
var detail_1 = require("./model/detail");
var users_1 = __importDefault(require("./routes/users"));
var app = express_1.default();
app.use(morgan_1.default('dev'));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use("/home", function (_req, res) {
    res.send("Loading!! din!! din!! Loading!!");
});
app.get("/", function (_req, res) {
    res.json({
        message: "My Rule-Validation API",
        status: "success",
        data: detail_1.details
    });
});
app.use("/validate-rule", users_1.default);
// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(http_errors_1.default(404));
});
exports.default = app;
