// import UserModal from "../../model/schemas/UserModel";


class MessageReturns {

    situation:boolean = true;
    msg:string;

    constructor(situation:boolean,msg:string ){
        this.situation = situation;
        this.msg = msg;
    }
}

export default MessageReturns;