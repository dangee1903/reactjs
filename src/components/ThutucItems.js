import React, {useEffect , useState , useMemo } from 'react';
import Plus from './../assets/images/plus.svg';
import {
    BrowserRouter as Router,
    Link,
  } from "react-router-dom";
const ThutucItems = ({items,changeS}) =>  {
    return (
        <ul>
            {items.map((data,index)=>(
                <li key={index}>
                    <div className="left" onClick={() => changeS(data.thuTuc_Ma)} key={index}>
                        {data.thuTuc_Ma}<br></br>
                        {data.thuTuc_Ten}
                    </div>
                    <div className="right">
                        <Link to={`/taothutuc/${data.thuTuc_Ma}`} ><img src={Plus}></img></Link>
                    </div>
                </li>
            ))}
        </ul>
    );
}

export default ThutucItems;