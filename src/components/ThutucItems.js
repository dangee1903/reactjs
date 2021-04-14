import React, {useEffect , useState , useMemo } from 'react';
import Plus from './../assets/images/plus.svg';
const ThutucItems = ({items,changeS,setdata,dataType,setDataLeft}) =>  {
    function handelClick(e,value){
        e.preventDefault();
        setdata(1);
        setDataLeft(1);
    }
    return (
        <ul>
            {items.map((data,index)=>(
                <li key={index}>
                    <div className="left" onClick={() => changeS(data.thuTuc_Ma)} key={index}>
                        {data.thuTuc_Ma}<br></br>
                        {data.thuTuc_Ten}
                    </div>
                    <div className="right">
                        <a href="/#" onClick={(e)=> handelClick(e,data.thuTuc_Ma)} ><img src={Plus}></img></a>
                    </div>
                </li>
            ))}
        </ul>
    );
}

export default ThutucItems;