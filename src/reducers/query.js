import * as types from './../constants/ActionType';
let defaultSate = '';
const query = (state = defaultSate,action) => {
    switch(action.type){
        case types.CHANGE_QUERY:
            console.log(action);
            return state;
        default:
            return state;
    }
}
export default query;