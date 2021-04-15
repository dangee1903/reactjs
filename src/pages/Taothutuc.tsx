import * as React from 'react';
import { useState } from 'react';
import Right from '../components/ThuTuc600/Right';
import Left from './../components/ThuTuc600/Left';
import Title from './../components/Title';
const Taothutuc = (props : any) =>{
    let {match} = props;
    const id    = match.params.id;
    
    return(
    <div>
        <Title 
            title={`Thủ tục ${id}`} 
            types={id}
        />
        <div className="row">
            <Left />
            <Right />
        </div>
    </div>
    )
}
export default Taothutuc;