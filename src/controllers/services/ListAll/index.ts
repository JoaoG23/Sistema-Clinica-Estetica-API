class ListAllService {

    public static async execulte( Model:any ):Promise<object> {
        try {
            const allDatas = await Model.findAll();
            return allDatas.length > 0
              ? allDatas
              : null
        } catch (error) {
            return error;
        }
    }
}

export default ListAllService;