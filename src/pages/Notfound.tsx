import * as React from 'react'
import { useState } from 'react';
const Notfound = (props : any) =>{
    const [data,setData] = useState([]);
    return(
        <div>
            <h2>Trang bạn tìm không tồn tại</h2>
        </div>
    )
}
export default Notfound;