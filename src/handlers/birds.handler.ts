import DbHandler from "./db.handler";

export default class BirdsHandler {
    static async getBirds(amount:number, page:number) {
      const birds = await DbHandler.getBirds(amount,page);
      return birds;
    }
}