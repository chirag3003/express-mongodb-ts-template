import { Request, Response } from "express";
import { IExampleController } from "interfaces/example.interface";

export default class ExampleController implements IExampleController {
  async getExample(req: Request, res: Response) {
    res.json("Example World");
  }
}
