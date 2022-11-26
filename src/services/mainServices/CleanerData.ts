import { MessageReturnDefault } from "../messageServices/MessageReturnDefault";

class CleanerData {
   static async clearAll(Model: any): Promise<object> {
      await Model.truncate({ cascade: true, restartIdentity: true });
      return new MessageReturnDefault(true, "Remove all with success");
  }
}

export default CleanerData;
