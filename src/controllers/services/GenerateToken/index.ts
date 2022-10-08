import jwt from "jsonwebtoken";
class GenerateToken {
  public static async execulte(dataForSign: any): Promise<any> {
    try {
      const secret: any = process.env.TOKEN_SECRET;
      const tokenGenerated: any = await jwt.sign(dataForSign, secret, {
        expiresIn: '1h',
      });
      return tokenGenerated;
    } catch (error) {
      return error;
    }
  }
}

export default GenerateToken;
