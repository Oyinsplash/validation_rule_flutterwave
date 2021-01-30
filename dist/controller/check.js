"use strict";
// let fields;
Object.defineProperty(exports, "__esModule", { value: true });
// const checkFields = (rule: Record<string, string>, data: unknown) => {
//     return !rule ? "rule" : !data ? "data" : "valid"
// }
// const checkRule = (rule: Record<string, string>) => {
//     return !rule.field ? "field" : !rule.condition ? "condition" : !rule.condition_value ? "condition_value" : "valid";
// }
// const checkData = (data: unknown) => {
//     const dataTypes = ["String", "Object", "Array"];
//     console.log(typeof data);
// }  
// export const checkValidity = (rule: Record<string, string>, data: unknown) => {
//     const valid:any = () => {
//         if (checkFields(rule, data) !== "valid") {
//             return checkFields(rule, data)
//         } else if (checkRule(rule) !== "valid") {
//             return checkRule(rule)
//         } else {
//             return "yes"
//         }
//         return
//     }
//     console.log(valid())
//     return valid();
// }
exports.default = {
    checkRuleAndDataFieldsAreRequired: function (rule, data) {
        return !rule ? ["rule is required."] : !data ? ["data is required."] : [];
    },
    checkAllRuleFieldsAreRequired: function (rule) {
        return rule && !rule.field ? ["field field is missing from data."] : rule && !rule.condition ? ["field condition is missing from data."] : rule && !rule.condition_value ? ["field condition_value  is missing from data."] : [];
    },
    checkForValidJSON: function (jsons, rule) {
        return ((typeof jsons !== "object") || (Array.isArray(jsons))) ? ["Invalid JSON payload passed."] : ((rule && typeof rule !== "object") || (rule && Array.isArray(rule))) ? ["rule should be an object."] : [];
    },
    checkDataFieldIsValid: function (data) {
        return (typeof data !== "string" || typeof data !== "object" || typeof data === "object") ? ["A valid data field"] : [];
    }
};
