import * as types from './../constants/ActionType';

export const actSearch = (value)=> {
    return{
        type : types.SEARCH,
        value
    }
}

export const actChangeBHD = (value)=> {
    return{
        type : types.CHANGEBHD,
        value
    }
}
