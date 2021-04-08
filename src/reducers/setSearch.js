import * as types from './../constants/ActionType';
let defaultSate = "";
const query = (state = defaultSate,action) => {
    switch(action.type){
        case types.SEARCH:
            console.log(action);
            state = action.value;
            return state;
        default:
            return state;
    }
}
export default query;