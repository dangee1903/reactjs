import * as types from './../constants/ActionType';
let defaultSate = "bhD01";
const kieumau600 = (state = defaultSate,action) => {
    switch(action.type){
        case types.CHANGEBHD:
            state = action.value;
            return state;
        default:
            return state;
    }
}
export default kieumau600;