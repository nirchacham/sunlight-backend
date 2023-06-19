import { Request, Response } from "express";
import BirdsHandler from "../handlers/birds.handler";

export default class BirdsController {
  static async getBirds(req: Request, res: Response) {
    const {amount,skip} = req.query;
    //Do a middleware checking amount & page are valid params.
    
    const result = await BirdsHandler.getBirds(+amount!,+skip!);
    res.send(result);   
    // res.status(result.status).send(result.message);
  }

}
