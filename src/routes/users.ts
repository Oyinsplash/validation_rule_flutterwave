import express, {Request, Response, NextFunction} from 'express';
import checks from '../controller/check'
const router = express.Router();

const conditions: Record<string, string> = {"eq": "===", "neq": "!==", "gt": ">", "gte":">=", "contains":"include"}

/* GET users listing. */
router.post('/', (req: Request, res: Response) => {
  const { data, rule } = req.body;
  const { checkRuleAndDataFieldsAreRequired, checkAllRuleFieldsAreRequired, checkForValidJSON } = checks;

  const errors = [];
  const jsons = req.body
  if (jsons) {
    errors.push(...checkForValidJSON(jsons, rule));
    errors.push(...checkRuleAndDataFieldsAreRequired(rule, data));
    errors.push(...checkAllRuleFieldsAreRequired(rule));
  }
  console.log(errors)
  if (errors.length > 0){
    res.status(400).json({ "message": errors[0], "status": "error", "data": null })
  }
});
export default router;
