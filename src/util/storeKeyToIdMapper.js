const uuidv1 = require('uuid/v1');
//export const GUID=uuidv1();

export default class GUID {
    getGUID=()=>{
        return uuidv1()
    }
}