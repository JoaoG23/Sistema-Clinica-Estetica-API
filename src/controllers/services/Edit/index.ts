import MessageReturns from "../MessageReturns";

class EditDataService {

    public static async execulte( Model:any, newDataUpdated:object, identifierData: object ):Promise<object> {
        try {
            const updated = await Model.update(
                newDataUpdated as any,
                {
                  returning: true,
                  where:identifierData,
                }
              );
            return updated;
        } catch (error) {
            return error;
        }
    }
}

export default EditDataService;