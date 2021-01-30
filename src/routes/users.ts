import express, {Request, Response, NextFunction} from 'express';
import {checkValidity} from '../controller/check'
const router = express.Router();

const conditions: Record<string, string> = {"eq": "===", "neq": "!==", "gt": ">", "gte":">=", "contains":"include"}

/* GET users listing. */
router.post('/', (req: Request, res: Response) => {
   // Check if req is a valid json

  const { data, rule } = req.body;
  const { valid } = checkValidity(rule, data);
  console.log(valid)
  return valid
    ? res.status(400).json({ "message": `field is required.`, "status": "error", "data": null }) 
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
      
    })
});
export default router;
