import React, { Component } from 'react';
import * as types from './../constants/actionType';
let defaultSate = {
    islogin : false,
    username: null
}
let checkout = (username,password) => {
    if(username == "admin" && password == "123"){
        return true;
    }else{
        return false;
    }
}
const user = (state = defaultSate, action) =>{
    switch(action.type){
        case types.USER_LOGIN:
            return [...state];
    }
}
export default user;