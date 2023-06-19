import mockData from '../mockData';

export default class DbHandler {
    
    static async getBirds(amount:number, skip:number) {
      try{
        if(skip*amount+amount > mockData.data.items.length) return null;

        const data = mockData.data.items.slice(skip*amount,skip*amount + amount);
        return {
              items:data      
        };
      } catch(err) {
        console.log(err);
      }
    }
}