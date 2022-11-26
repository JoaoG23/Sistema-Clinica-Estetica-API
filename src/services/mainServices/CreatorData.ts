class CreateData {
  static async createModel(Model: any, dataCreate: object): Promise<object> {
    await Model.create(dataCreate);
    return dataCreate;
  }
}

export default CreateData;
