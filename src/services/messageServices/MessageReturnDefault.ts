export class MessageReturnDefault {
  public situation: boolean = true;
  public msg: string;

  constructor(situation: boolean, msg: string) {
    this.situation = situation;
    this.msg = msg;
  }
}
