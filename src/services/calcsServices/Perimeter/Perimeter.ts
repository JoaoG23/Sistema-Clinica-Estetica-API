import Multiplier from "../Multiplier/Multiplier";

class Perimeter {
  static retanguloCalculate(height: number, width: number): number {
    let getHeight = Multiplier.multiplyTwoNumbers(height, 2);
    let getWidth = Multiplier.multiplyTwoNumbers(width, 2);

    let perimeterResult = getHeight + getWidth;

    return perimeterResult;
  }

  static trianguloCalculate(sideValue: number): number {
    let perimeterResult = Multiplier.multiplyTwoNumbers(sideValue, 3);
    return perimeterResult;
  }
}

export default Perimeter;
