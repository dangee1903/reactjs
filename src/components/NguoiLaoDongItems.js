import React, {useEffect , useState , useMemo } from 'react';
import Plus from './../assets/images/plus.svg';

const NguoiLaoDongItems = (items) =>  {
    return (
        <ul>
            {items.items.map((data,index)=>(
                <li key={index} style={{cursor:"pointer"}}>
                    <div className="left" key={index}>
                        {data.nld_Hoten}
                    </div>
                </li>
            ))}
        </ul>
    );
}

export default NguoiLaoDongItems;