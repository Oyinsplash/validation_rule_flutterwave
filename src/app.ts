import createError, { HttpError } from 'http-errors';
import express, {Request, Response, NextFunction} from 'express';
import logger from 'morgan';
import { details } from './model/detail'
import users from './routes/users'

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/home",function(_req:Request, res:Response) {
  res.send("Loading!! din!! din!! Loading!!");
});

app.get("/", (_req, res) => {
  res.json({
    message: "My Rule-Validation API",
    status: "success",
    data: details
  })
})

app.use("/validate-rule", users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});



export default app;
