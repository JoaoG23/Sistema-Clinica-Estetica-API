class ListOneDataService {
    public static async execulte( Model:any, dataForFind:object ):Promise<object> {
        try {
           const findedOne = await Model.findOne({
               where:dataForFind ,
            });
            return findedOne;
        } catch (error) {
            console.error(error)
            return error;
        }
    }
}

export default ListOneDataService;