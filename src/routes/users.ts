import express, {Request, Response, NextFunction} from 'express';
import checks from '../controller/check'
const router = express.Router();

const conditions: Record<string, string> = {"eq": "===", "neq": "!==", "gt": ">", "gte":">=", "contains":"include"}

/* GET users listing. */
router.post('/', (req: Request, res: Response) => {
  const { data, rule } = req.body;
  const { checkRuleAndDataFieldsAreRequired, checkAllRuleFieldsAreRequired, checkForValidJSON, checkDataFieldIsValid } = checks;
  console.log("yaaay====>")

  const errors = [];
  const jsons = req.body
  if (jsons) {
    errors.push(...checkForValidJSON(jsons, rule));
    errors.push(...checkRuleAndDataFieldsAreRequired(rule, data));
    errors.push(...checkAllRuleFieldsAreRequired(rule));
    errors.push(...checkDataFieldIsValid(data));
  }
  console.log(errors)
  console.log("yaaay")
  return (errors.length > 0) ? res.status(400).json({ "message": errors[0], "status": "error", "data": null })
    : res.status(200).json(
      {
        "message": `field ${rule.field} successfully validated.`,
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
      }
  )
});
export default router;
