export default {
    checkRuleAndDataFieldsAreRequired: (rule:Record<string, unknown>, data: unknown) => {
        return !rule ? ["rule is required."] : !data ? ["data is required."] : [];
    },
    checkAllRuleFieldsAreRequired: (rule: Record<string, unknown>) => {
        return rule && !rule.field ? ["field field is missing from data."] : rule && !rule.condition ? ["field condition is missing from data."] : rule && !rule.condition_value ? ["field condition_value  is missing from data."] : [];   
    },
    checkForValidJSON: (jsons: Record<string, unknown>, rule: Record<string, unknown> ) => {
        return ((typeof jsons !== "object" )||(Array.isArray(jsons))) ? ["Invalid JSON payload passed."] : ((rule && typeof rule !== "object") || (rule && Array.isArray(rule))) ? ["rule should be an object."] : [];
    },
    checkDataFieldIsValid: (data: unknown) => {
        const dataType = ["object", "array", "string"] 
        return !(dataType.includes(typeof data)) ? ["data should be a string, a valid array or a valid JSON object"] : [];
    },
}

