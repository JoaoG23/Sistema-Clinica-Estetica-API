export interface User {
    id?:number;
    name?: string;
    userName?: string;
    password?: string;
    phonenumber?: string;
    idPrevilegies?:number;
    email?: string;
    userData?:{
      id?:number;
      name?:string;
      force?:number;
    }
  };

  export interface UserForce {
    userData?:{
      id?:number;
      name?:string;
      force?:number;
    }
  }