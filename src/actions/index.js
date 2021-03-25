import * as types from './../constants/ActionType';

export const actSearch = (query)=> {
    return{
        type : types.SEARCH,
        query,
    }
}
export const actChangeQuery = (query)=> {
    return{
        type : types.CHANGE_QUERY,
        query,
    }
}