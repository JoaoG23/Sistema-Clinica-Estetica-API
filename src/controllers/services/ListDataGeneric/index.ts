class ListDataGeneric {
    public static async execulte( Model:any, dataForSelection:object ):Promise<object> {
        try {
           const data = await Model.findAll(dataForSelection);
           return data.length > 0
           ? data
           : null
        } catch (error) {
            return error;
        }
    }
}

export default ListDataGeneric;