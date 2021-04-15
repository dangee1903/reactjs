import * as React from 'react'
import { useState } from 'react';
import Header from './../components/Header'
import ThuTucLeft from './../components/ThuTuc/ThutucLeft'
import ThuTucRight from './../components/ThuTuc/ThutucRight'
import CreateThutuc from './../components/CreateThutuc'
import Title from './../components/Title'
const Thutuc = (props : any) =>{
    const [data,setData]                = useState([]);
    const [Datatype,setDatatype]        = useState(0);
    return(
        <div>
            <Title title={"Tất cả các thủ tục"} />
            <div className="row">
                <ThuTucLeft Datatype={Datatype} setDatatype={setDatatype} />
                {Datatype == 0 ? <ThuTucRight /> : <CreateThutuc Datatype={Datatype} setDatatype={setDatatype} />}
            </div>
        </div>
    )
}
export default Thutuc;