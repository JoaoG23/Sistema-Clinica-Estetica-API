import Divisor from "../Divisor/Divisor";
import Exponential from "../Exponential/Exponential";
import Multiplier from "../Multiplier/Multiplier";
import SquareRoot from "../SquareRoot/SquareRoot";
class Area {
  static calculeAreaTriangulo(size: number): number {
    let sizeRaisedTwo = Exponential.raisedToPower(size, 2);
    let dividedByFour = Divisor.divideTwoNumbers(sizeRaisedTwo, 4);
    let squareRootOftheThree = SquareRoot.calculeRoot(3);
    let resultAreaTriangulo = Multiplier.multiplyTwoNumbers(
      dividedByFour,
      squareRootOftheThree
    );
    let roundedArea = resultAreaTriangulo.toPrecision(4);

    return Number(roundedArea);
  }

  static calculeAreaRetangulo(height: number, width: number): number {
    return Multiplier.multiplyTwoNumbers(height, width);
  }
}

export default Area;
