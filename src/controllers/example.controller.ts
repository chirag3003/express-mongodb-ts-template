import { Request, Response } from "express";
import { ReasonPhrases, StatusCodes } from "http-status-codes";
import { IExampleController } from "interfaces/example.interface";

export default class ExampleController implements IExampleController {
  async getExample(req: Request, res: Response) {
    try {
      res.status(StatusCodes.OK).send(ReasonPhrases.OK);
    } catch (err) {
      console.error(err);
      res.sendStatus(StatusCodes.INTERNAL_SERVER_ERROR);
    }
  }
}
