import * as types from './../constants/actionType';

export const actLogin = (username,password)=> {
    return{
        type : types.USER_LOGIN,
        username,
        password,
    }
}

export const actLogin = (username,password)=> {
    return{
        type : types.USER_LOOUT,
    }
}