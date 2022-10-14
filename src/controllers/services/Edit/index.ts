
class EditDataService {
  public static async execulte(
    Model: any,
    newDataUpdated: object,
    identifierData: object
  ): Promise<object> {
    try {
      const updated = await Model.update(newDataUpdated as any, {
        force: true,
        returning: true,
        where: identifierData,
      });
      return updated;
    } catch (error) {
        console.error(error)
      return error;
    }
  }
}

export default EditDataService;
