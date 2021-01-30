"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkValidity = void 0;
var fields;
var checkFields = function (rule, data) {
    return !rule ? "rule" : !data ? "data" : "valid";
};
var checkRule = function (rule) {
    return !rule.field ? "field" : !rule.condition ? "condition" : !rule.condition_value ? "condition_value" : "valid";
};
var checkData = function (data) {
    var dataTypes = ["String", "Object", "Array"];
    console.log(typeof data);
};
exports.checkValidity = function (rule, data) {
    var valid = function () {
        if (checkFields(rule, data) !== "valid") {
            return checkFields(rule, data);
        }
        else if (checkRule(rule) !== "valid") {
            return checkRule(rule);
        }
        else {
            return "yes";
        }
        return;
    };
    return valid;
};
