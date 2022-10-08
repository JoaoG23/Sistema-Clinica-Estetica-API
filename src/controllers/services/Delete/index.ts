import MessageReturns from "../MessageReturns";


class DeleteDataService {
    public static async execulte( Model:any, dataForFind:object ):Promise<object> {
        try {
            const deleted = await Model.destroy({
                where: dataForFind,
              });
            return deleted;
        } catch (error) {
            return error;
        }
    }
}

export default DeleteDataService;