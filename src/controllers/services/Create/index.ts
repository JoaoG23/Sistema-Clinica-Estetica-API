
class CreateDataService {

    public static async execulte( Model:any, dataCreate:object ):Promise<object> {
        try {
            await Model.sync();
            await Model.create(dataCreate);
            return dataCreate;
        } catch (error) {
            console.error(error)
            return error;
        }
    }
}

export default CreateDataService;