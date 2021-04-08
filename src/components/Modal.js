import React, {useEffect , useState , useMemo } from 'react';
export const Modal = ()=>{
    return(
        <div className="modal">
            <p>x</p>
            <div className="modal__wrap">
                <table>
                    <thead>
                        <tr>
                            <th scope="col">Mã tờ khai</th>
                            <th scope="col">Tên tờ khai</th>
                            <th scope="col">Số lượng</th>
                            <th scope="col">Tác vụ</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Mã tờ khai</td>
                            <td>Tên tờ khai</td>
                            <td>Số lượng</td>
                            <td>Tác vụ</td>
                        </tr> 
                    </tbody>
                </table>
            </div>
        </div>
    )
}