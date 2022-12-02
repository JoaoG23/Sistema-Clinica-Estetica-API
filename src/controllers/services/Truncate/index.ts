import sequelize, { Model } from "sequelize";
import MessageReturns from "../MessageReturns";

class TruncateAll {

    public static async execulte( Model:any ):Promise<object> {
        try {
            await Model.truncate({cascade: true, restartIdentity:true})
            return new MessageReturns( true,'Remove all with success' );
        } catch (error) {
            return error;
        }
    }
}

export default TruncateAll;