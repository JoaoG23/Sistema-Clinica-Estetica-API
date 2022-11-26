import { MessageReturnDefault } from "../messageServices/MessageReturnDefault";
class ViewerAllData {
  static async listAllModels(Model: any): Promise<object | string> {
    const allDatas = await Model.findAll();
    return allDatas.length > 0
      ? allDatas
      : new MessageReturnDefault(false, "Not have data");
  }
}

export default ViewerAllData;
