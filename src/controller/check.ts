let fields;

const checkFields = (rule: Record<string, string>, data: unknown) => {
    return !rule ? "rule" : !data ? "data" : "valid"
}

const checkRule = (rule: Record<string, string>) => {
    return !rule.field ? "field" : !rule.condition ? "condition" : !rule.condition_value ? "condition_value" : "valid";
}

const checkData = (data: unknown) => {
    const dataTypes = ["String", "Object", "Array"];
    console.log(typeof data);
}  

export const checkValidity = (rule: Record<string, string>, data: unknown) => {
    const valid:any = () => {
        if (checkFields(rule, data) !== "valid") {
            return checkFields(rule, data)
        } else if (checkRule(rule) !== "valid") {
            return checkRule(rule)
        } else {
            return "yes"
        }
        return
    }
    
    return valid;
}




