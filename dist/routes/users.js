"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var check_1 = __importDefault(require("../controller/check"));
var router = express_1.default.Router();
var conditions = { "eq": "===", "neq": "!==", "gt": ">", "gte": ">=", "contains": "include" };
/* GET users listing. */
router.post('/', function (req, res) {
    var _a = req.body, data = _a.data, rule = _a.rule;
    var checkRuleAndDataFieldsAreRequired = check_1.default.checkRuleAndDataFieldsAreRequired, checkAllRuleFieldsAreRequired = check_1.default.checkAllRuleFieldsAreRequired, checkForValidJSON = check_1.default.checkForValidJSON, checkDataFieldIsValid = check_1.default.checkDataFieldIsValid;
    console.log("yaaay====>");
    var errors = [];
    var jsons = req.body;
    if (jsons) {
        errors.push.apply(errors, checkForValidJSON(jsons, rule));
        errors.push.apply(errors, checkRuleAndDataFieldsAreRequired(rule, data));
        errors.push.apply(errors, checkAllRuleFieldsAreRequired(rule));
        errors.push.apply(errors, checkDataFieldIsValid(data));
    }
    console.log(errors);
    console.log("yaaay");
    return (errors.length > 0) ? res.status(400).json({ "message": errors[0], "status": "error", "data": null })
        : res.status(200).json({
            "message": "field " + rule.field + " successfully validated.",
            "status": "success",
            "data": {
                "validation": {
                    "error": false,
                    "field": rule.field,
                    "field_value": data[rule.field],
                    "condition": rule.condition,
                    "condition_value": rule.condition_value
                }
            }
        });
});
exports.default = router;
