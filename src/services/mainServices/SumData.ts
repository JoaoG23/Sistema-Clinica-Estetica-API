import sequelize from "sequelize";

class SumData {
  static async sumAllModelByColumn(
    Model: any,
    columnCalculated: string
  ): Promise<object> {
    const totalSum = await Model.findAll({
      attributes: [
        [
          sequelize.fn("sum", sequelize.col(columnCalculated)),
          "total_calculated",
        ],
      ],
    });
    return totalSum;
  }
}

export default SumData;
