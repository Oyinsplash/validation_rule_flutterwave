"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var check_1 = require("../controller/check");
var router = express_1.default.Router();
var conditions = { "eq": "===", "neq": "!==", "gt": ">", "gte": ">=", "contains": "include" };
/* GET users listing. */
router.post('/', function (req, res) {
    // Check if req is a valid json
    var _a = req.body, data = _a.data, rule = _a.rule;
    var valid = check_1.checkValidity(rule, data).valid;
    console.log(valid);
    return valid
        ? res.status(400).json({ "message": "field is required.", "status": "error", "data": null })
        : res.status(200).json({
            "message": "field [name of field] successfully validated.",
            "status": "success",
            "data": {
                "validation": {
                    "error": false,
                    "field": "[name of field]",
                    "field_value": "[value of field]",
                    "condition": "[rule condition]",
                    "condition_value": "[condition value]"
                }
            }
        });
});
exports.default = router;
