import * as React from 'react'
import { useState } from 'react';
import Header from '../components/Header'
import ThuTucLeft from '../components/ThutucLeft'
import ThuTucRight from '../components/ThutucRight'
import CreateThutuc from '../components/CreateThutuc'
import Title from '../components/Title'
const Taothutuc = (props : any) =>{
    const [data,setData] = useState([]);
    return(
        <div>
            <h2>Tạo thủ tục</h2>
        </div>
    )
}
export default Taothutuc;