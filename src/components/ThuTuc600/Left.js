import { render } from '@testing-library/react';
import React, {useEffect, useState } from 'react';
import mocdata from '../../mockData';
import Plus from './../../assets/images/plus.svg';
const Left = (props) => {
    const [datas,setData] = useState([]);
    useEffect( () => {
        setData(mocdata.DATANGUOILAODONG);
    },[])
    console.log(datas);
    return(
        <div className="col-md-3 left">
        <div className="col-12">
            <div className="title">Danh sách người lao động</div>
                <form>
                    <label >Tìm kiếm</label>
                    <input type="text" placeholder="Điền thủ tục..." />
                    <button type="submit" onClick={ (e) => {e.preventDefault()}}><img src={Plus} alt="" /></button>
                </form>
            <div className="botton">
                <h2 >Tất cả người lao động</h2>
                <ul>
                    {datas.map((data,index)=>(
                        <li key={index}>
                            <div className="left" key={index}>
                                <p>{data.nld_hoten}</p>
                            </div>
                            <div className="right">
                                <img src={Plus}></img>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
        </div>
    );
}
export default Left;