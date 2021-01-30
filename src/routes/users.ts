import express, {Request, Response, NextFunction} from 'express';
import checks from '../controller/check'
const router = express.Router();

const conditions: Record<string, string> = {"eq": "===", "neq": "!==", "gt": ">", "gte":">=", "contains":"include"}

/* GET users listing. */
router.post('/', (req: Request, res: Response) => {
  const { data, rule } = req.body;
  const { checkRuleAndDataFieldsAreRequired, checkAllRuleFieldsAreRequired } = checks;

  const errors = [];
  if (req.body) {
    errors.push(...checkRuleAndDataFieldsAreRequired(rule, data));
    errors.push(...checkAllRuleFieldsAreRequired(rule));
  }
  if (errors.length){
    res.status(400).json({ "message": `${errors} is required.`, "status": "error", "data": null })
  }
});
export default router;
