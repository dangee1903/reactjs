import * as React from 'react'
import { useState } from 'react';
import Header from '../components/Header'
import ThuTucLeft from '../components/ThutucLeft'
import ThuTucRight from '../components/ThutucRight'
import CreateThutuc from '../components/CreateThutuc'
import Title from '../components/Title'
const Thutuc = (props : any) =>{
    const [data,setData] = useState([]);
    return(
        <div>
            <Title />
            <div className="row">
                <ThuTucLeft data={props}/>
                <ThuTucRight/>
            </div>
        </div>
    )
}
export default Thutuc;