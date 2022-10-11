// declare namespace Express {
//     export interface Request{
//         usuarioToken?:string;
//         userData?:any
//     }
// }
declare namespace Express {
    export interface Request{
        usuarioToken?:string;
        userData?:{
            previlegie?:number
        } | any
    }
}