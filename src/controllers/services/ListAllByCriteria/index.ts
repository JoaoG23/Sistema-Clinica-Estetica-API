class ListAllByCriteriaService {
    public static async execulte( Model:any, dataForFind:object ):Promise<object> {
        try {
           const findedOne = await Model.findAll({
            where: dataForFind
          });
    
            return findedOne;
        } catch (error) {
            return error;
        }
    }
}

export default ListAllByCriteriaService;